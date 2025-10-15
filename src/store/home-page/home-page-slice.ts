import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getSelectedFilters, setSelectedFilters as saveFilters } from '@/utils/storage';
import { fetchFilters, fetchVideos } from './home-page-thunks';
import type { FilterData, SelectedFilters, Video } from '@/types';

interface HomePageState {
  cursor: null | string | undefined;
  error: null | string;
  filterData: FilterData;
  filtersError: null | string;
  filtersLoading: boolean;
  hasMore: boolean;
  loading: boolean;
  selectedFilters: SelectedFilters;
  selectedVideo: null | Video;
  videos: Video[];
}

// Load persisted filters from localStorage or use defaults
const getInitialFilters = (): SelectedFilters => {
  const savedFilters = getSelectedFilters();

  return (
    savedFilters ?? {
      tags: [],
      genere: [],
      appPackageName: [],
      platform: [],
      fromCreatedAt: null,
      toCreatedAt: null,
      sortBy: 'createdAt',
      sortDuration: 'desc',
      cursor: null,
    }
  );
};

const initialState: HomePageState = {
  videos: [],
  loading: false,
  error: null,
  filterData: {
    genere: [],
    tags: [],
    platform: [],
    appPackageName: [],
  },
  filtersLoading: false,
  filtersError: null,
  selectedFilters: getInitialFilters(),
  cursor: null,
  hasMore: true,
  selectedVideo: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSelectedFilters: (state, action: PayloadAction<SelectedFilters>) => {
      state.selectedFilters = action.payload;
      // Save to localStorage whenever filters change
      saveFilters(action.payload);
    },
    setSelectedVideo: (state, action: PayloadAction<null | Video>) => {
      state.selectedVideo = action.payload;
    },
    setSortDuration: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.selectedFilters.sortDuration = action.payload;
      // Save to localStorage
      saveFilters(state.selectedFilters);
    },
    setCursor: (state, action: PayloadAction<null | string>) => {
      state.selectedFilters.cursor = action.payload;
      // Don't save cursor to localStorage (handled in saveFilters)
    },
    clearFilters: (state) => {
      state.selectedFilters = {
        tags: [],
        genere: [],
        appPackageName: [],
        platform: [],
        fromCreatedAt: null,
        toCreatedAt: null,
        sortBy: 'createdAt',
        sortDuration: 'desc',
        cursor: null,
      };
      state.cursor = null;
      state.hasMore = true;
      // Clear filters from localStorage
      saveFilters(state.selectedFilters);
    },
  },
  extraReducers: (builder) => {
    // Fetch filters
    builder.addCase(fetchFilters.pending, (state) => {
      state.filtersLoading = true;
      state.filtersError = null;
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filtersLoading = false;
      state.filterData = action.payload;
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      state.filtersLoading = false;
      state.filtersError = action.error.message ?? 'Failed to fetch filters';
    });

    // Fetch videos
    builder.addCase(fetchVideos.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false;
      // If cursor was null, it's a fresh fetch (replace videos)
      // If cursor exists, it's loading more (append videos)
      if (!state.selectedFilters.cursor) {
        state.videos = action.payload.videos;
      } else {
        state.videos = [...state.videos, ...action.payload.videos];
      }
      state.cursor = action.payload.cursor;
      state.hasMore = action.payload.cursor !== undefined;
      // Update the cursor in selectedFilters for next load
      state.selectedFilters.cursor = action.payload.cursor ?? null;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to fetch videos';
    });
  },
});

export const { setSelectedFilters, setSelectedVideo, setSortDuration, setCursor, clearFilters } =
  homePageSlice.actions;
export default homePageSlice.reducer;
