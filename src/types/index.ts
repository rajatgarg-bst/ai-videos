// Video types
export interface Video {
  appId: string;
  appPackageName: string;
  createdAt: string;
  description: string;
  duration: number;
  genere: string[];
  id: string;
  platform: string;
  tags: string[];
  thumbnailUrl: string;
  title: string;
  videoUrl: string;
}

// Filter types
export interface FilterData {
  appPackageName: string[];
  genere: string[];
  platform: string[];
  tags: string[];
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

// New cursor-based pagination response
export interface VideosResponse {
  cursor: string | undefined;
  limit: number;
  videos: Video[];
}

// Filter state types
export interface SelectedFilters {
  appPackageName: string[];
  cursor: null | string;
  fromCreatedAt: null | string;
  genere: string[];
  platform: string[];
  sortBy: 'createdAt';
  sortDuration: 'asc' | 'desc';
  tags: string[];
  toCreatedAt: null | string;
}
