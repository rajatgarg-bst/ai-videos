import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '@/services/api.service';
import type { FilterData, SelectedFilters, VideosResponse } from '@/types';

// Thunk to fetch filter options
export const fetchFilters = createAsyncThunk<FilterData, void>(
  'homePage/fetchFilters',
  async () => {
    const response = await apiService.getFilters();
    return response;
  }
);

// Thunk to fetch videos
export const fetchVideos = createAsyncThunk<
  VideosResponse,
  { filters: SelectedFilters; limit: number }
>('homePage/fetchVideos', async ({ filters, limit }) => {
  const response = await apiService.getVideos(filters, limit);
  return response;
});
