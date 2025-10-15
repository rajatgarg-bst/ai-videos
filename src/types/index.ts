// Video types
export interface Video {
  createdAt: string;
  genre: string;
  id: number;
  name: string;
  tags: string[];
  thumbnail: string;
  videoUrl: string;
}

// Filter types
export interface FilterData {
  genres: string[];
  tags: string[];
}

// Pagination types
export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

export interface VideosResponse {
  pagination: Pagination;
  videos: Video[];
}

// Filter state types
export interface SelectedFilters {
  dateFrom: null | string;
  dateTo: null | string;
  genres: string[];
  sortBy: 'newest' | 'oldest';
  tags: string[];
}
