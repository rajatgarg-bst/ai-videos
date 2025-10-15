import axiosInstance from '@/utils/axios';
import type { FilterData, SelectedFilters, VideosResponse } from '@/types';
import type { AxiosResponse } from 'axios';

interface GoogleLoginRequest {
  idToken: string;
}

interface GoogleLoginResponse {
  accessToken: string;
  email: string;
  name: string;
  profileUrl: string;
}

class ApiService {
  // Google login
  async googleLogin(idToken: string): Promise<GoogleLoginResponse> {
    const response: AxiosResponse<GoogleLoginResponse> = await axiosInstance.post(
      '/auth/v1/google-login',
      { idToken } as GoogleLoginRequest
    );
    return response.data;
  }

  // Get filter options
  async getFilters(): Promise<FilterData> {
    const response: AxiosResponse<FilterData> = await axiosInstance.get('/media/v1/filters');
    return response.data;
  }

  // Get videos with filters and cursor-based pagination
  async getVideos(filters: SelectedFilters, limit: number): Promise<VideosResponse> {
    const params = new URLSearchParams();

    // Add limit (default 20)
    params.append('limit', limit.toString());

    // Add sortBy (default createdAt)
    params.append('sortBy', filters.sortBy);

    // Add sortDuration (asc/desc)
    params.append('sortDuration', filters.sortDuration);

    // Add cursor if exists
    if (filters.cursor) {
      params.append('cursor', filters.cursor);
    }

    // Add date range filters
    if (filters.fromCreatedAt) {
      params.append('fromCreatedAt', filters.fromCreatedAt);
    }

    if (filters.toCreatedAt) {
      params.append('toCreatedAt', filters.toCreatedAt);
    }

    // Add tags filter
    if (filters.tags.length > 0) {
      params.append('tags', filters.tags.join(','));
    }

    // Add genere filter (note: API spec has typo "genere" instead of "genre")
    if (filters.genere.length > 0) {
      params.append('genere', filters.genere.join(','));
    }

    // Add appPackageName filter
    if (filters.appPackageName.length > 0) {
      params.append('appPackageName', filters.appPackageName.join(','));
    }

    // Add platform filter
    if (filters.platform.length > 0) {
      params.append('platform', filters.platform.join(','));
    }

    const response: AxiosResponse<VideosResponse> = await axiosInstance.get(
      `/media/v1/video-list?${params.toString()}`
    );
    return response.data;
  }
}

export default new ApiService();
