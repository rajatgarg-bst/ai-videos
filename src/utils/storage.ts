/**
 * Centralized localStorage utility
 * Single source of truth for all storage operations
 */

import type { SelectedFilters } from '@/types';

interface UserData {
  email: string;
  name: string;
  profileUrl: string;
}

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  USER_DATA: 'userData',
  SELECTED_FILTERS: 'selectedFilters',
} as const;

/**
 * Get access token from localStorage
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Set access token in localStorage
 */
export const setAccessToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

/**
 * Remove access token from localStorage
 */
export const removeAccessToken = (): void => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Get user data from localStorage
 */
export const getUserData = (): UserData | null => {
  const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
  if (!data) return null;

  try {
    return JSON.parse(data) as UserData;
  } catch {
    // Invalid JSON - remove corrupted data
    removeUserData();
    return null;
  }
};

/**
 * Set user data in localStorage
 */
export const setUserData = (userData: UserData): void => {
  localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
};

/**
 * Remove user data from localStorage
 */
export const removeUserData = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER_DATA);
};

/**
 * Clear all auth-related data from localStorage
 */
export const clearAuthStorage = (): void => {
  removeAccessToken();
  removeUserData();
};

/**
 * Set all auth data (token + user) in localStorage
 */
export const setAuthStorage = (token: string, userData: UserData): void => {
  setAccessToken(token);
  setUserData(userData);
};

/**
 * Get selected filters from localStorage
 */
export const getSelectedFilters = (): SelectedFilters | null => {
  const data = localStorage.getItem(STORAGE_KEYS.SELECTED_FILTERS);
  if (!data) return null;

  try {
    return JSON.parse(data) as SelectedFilters;
  } catch {
    // Invalid JSON - remove corrupted data
    removeSelectedFilters();
    return null;
  }
};

/**
 * Set selected filters in localStorage
 */
export const setSelectedFilters = (filters: SelectedFilters): void => {
  // Don't persist cursor - always start fresh
  const filtersToPersist = { ...filters, cursor: null };
  localStorage.setItem(STORAGE_KEYS.SELECTED_FILTERS, JSON.stringify(filtersToPersist));
};

/**
 * Remove selected filters from localStorage
 */
export const removeSelectedFilters = (): void => {
  localStorage.removeItem(STORAGE_KEYS.SELECTED_FILTERS);
};
