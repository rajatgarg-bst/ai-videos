import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchFilters, fetchVideos } from './home-page-thunks';
import type { FilterData, Pagination, SelectedFilters, Video } from '@/types';

interface HomePageState {
  error: null | string;
  filterData: FilterData;
  filtersError: null | string;
  filtersLoading: boolean;
  loading: boolean;
  pagination: null | Pagination;
  selectedFilters: SelectedFilters;
  selectedVideo: null | Video;
  videos: Video[];
}

const initialState: HomePageState = {
  videos: [],
  loading: false,
  error: null,
  filterData: {
    genres: [],
    tags: [],
  },
  filtersLoading: false,
  filtersError: null,
  selectedFilters: {
    genres: [],
    tags: [],
    dateFrom: null,
    dateTo: null,
    sortBy: 'newest',
  },
  pagination: null,
  selectedVideo: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSelectedFilters: (state, action: PayloadAction<SelectedFilters>) => {
      state.selectedFilters = action.payload;
    },
    setSelectedVideo: (state, action: PayloadAction<null | Video>) => {
      state.selectedVideo = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'newest' | 'oldest'>) => {
      state.selectedFilters.sortBy = action.payload;
    },
    clearFilters: (state) => {
      state.selectedFilters = {
        genres: [],
        tags: [],
        dateFrom: null,
        dateTo: null,
        sortBy: 'newest',
      };
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
      state.videos = action.payload.videos;
      state.pagination = action.payload.pagination;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Failed to fetch videos';
    });
  },
});

export const { setSelectedFilters, setSelectedVideo, setSortBy, clearFilters } =
  homePageSlice.actions;
export default homePageSlice.reducer;
