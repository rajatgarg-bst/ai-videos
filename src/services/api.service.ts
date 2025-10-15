import axiosInstance from '@/utils/axios';
import type { ApiResponse, FilterData, SelectedFilters, VideosResponse } from '@/types';
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
    const response: AxiosResponse<ApiResponse<FilterData>> =
      await axiosInstance.get('/api/filters');
    return response.data.data;
  }

  // Get videos with filters and pagination
  async getVideos(filters: SelectedFilters, page: number, limit: number): Promise<VideosResponse> {
    const params = new URLSearchParams();

    if (filters.genres.length > 0) {
      params.append('genres', filters.genres.join(','));
    }

    if (filters.tags.length > 0) {
      params.append('tags', filters.tags.join(','));
    }

    if (filters.dateFrom) {
      params.append('dateFrom', filters.dateFrom);
    }

    if (filters.dateTo) {
      params.append('dateTo', filters.dateTo);
    }

    params.append('sortBy', filters.sortBy);
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    const response: AxiosResponse<ApiResponse<VideosResponse>> = await axiosInstance.get(
      `/api/videos?${params.toString()}`
    );
    return response.data.data;
  }
}

export default new ApiService();
