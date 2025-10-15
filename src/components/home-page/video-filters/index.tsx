import ClearIcon from '@mui/icons-material/Clear';
import { Autocomplete, Box, Button, Chip, TextField, Paper } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import ErrorMessage from '@/components/common/error-message';
import LoadingSpinner from '@/components/common/loading-spinner';
import { clearFilters, setSelectedFilters } from '@/store/home-page/home-page-slice';
import { fetchFilters } from '@/store/home-page/home-page-thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { FC, SyntheticEvent } from 'react';
import './index.scss';

const VideoFilters: FC = () => {
  const dispatch = useAppDispatch();
  const { filterData, filtersLoading, filtersError, selectedFilters } = useAppSelector(
    (state) => state.homePage
  );

  const [localGenres, setLocalGenres] = useState<string[]>([]);
  const [localTags, setLocalTags] = useState<string[]>([]);
  const [localPlatform, setLocalPlatform] = useState<string[]>([]);
  const [localAppPackageName, setLocalAppPackageName] = useState<string[]>([]);
  const [localFromCreatedAt, setLocalFromCreatedAt] = useState<null | string>(null);
  const [localToCreatedAt, setLocalToCreatedAt] = useState<null | string>(null);

  useEffect(() => {
    void dispatch(fetchFilters());
  }, [dispatch]);

  useEffect(() => {
    setLocalGenres(selectedFilters.genere);
    setLocalTags(selectedFilters.tags);
    setLocalPlatform(selectedFilters.platform);
    setLocalAppPackageName(selectedFilters.appPackageName);
    setLocalFromCreatedAt(selectedFilters.fromCreatedAt);
    setLocalToCreatedAt(selectedFilters.toCreatedAt);
  }, [selectedFilters]);

  const handleApplyFilters = useCallback(() => {
    dispatch(
      setSelectedFilters({
        tags: localTags,
        genere: localGenres,
        appPackageName: localAppPackageName,
        platform: localPlatform,
        fromCreatedAt: localFromCreatedAt,
        toCreatedAt: localToCreatedAt,
        sortBy: selectedFilters.sortBy,
        sortDuration: selectedFilters.sortDuration,
        cursor: null, // Reset cursor when filters change
      })
    );
    // VideoGrid will automatically fetch videos when selectedFilters change
  }, [
    dispatch,
    localGenres,
    localTags,
    localPlatform,
    localAppPackageName,
    localFromCreatedAt,
    localToCreatedAt,
    selectedFilters.sortBy,
    selectedFilters.sortDuration,
  ]);

  const handleClearFilters = useCallback(() => {
    setLocalGenres([]);
    setLocalTags([]);
    setLocalPlatform([]);
    setLocalAppPackageName([]);
    setLocalFromCreatedAt(null);
    setLocalToCreatedAt(null);
    dispatch(clearFilters());
    // VideoGrid will automatically fetch videos when selectedFilters change
  }, [dispatch]);

  const handleGenreChange = useCallback((_event: SyntheticEvent, value: string[]) => {
    setLocalGenres(value);
  }, []);

  const handleTagChange = useCallback((_event: SyntheticEvent, value: string[]) => {
    setLocalTags(value);
  }, []);

  const handlePlatformChange = useCallback((_event: SyntheticEvent, value: string[]) => {
    setLocalPlatform(value);
  }, []);

  const handleAppPackageNameChange = useCallback((_event: SyntheticEvent, value: string[]) => {
    setLocalAppPackageName(value);
  }, []);

  const handleRetryFetchFilters = useCallback(() => {
    void dispatch(fetchFilters());
  }, [dispatch]);

  if (filtersLoading) {
    return (
      <Paper className="video-filters video-filters--loading" elevation={0}>
        <LoadingSpinner message="Loading filters..." size={24} />
      </Paper>
    );
  }

  if (filtersError) {
    return (
      <Paper className="video-filters video-filters--error" elevation={0}>
        <ErrorMessage message={filtersError} onRetry={handleRetryFetchFilters} />
      </Paper>
    );
  }

  return (
    <Paper className="video-filters" elevation={0}>
      <Box className="video-filters__container">
        {/* Main Filters Row */}
        <Box className="video-filters__main-row">
          {/* Genres Filter */}
          <Box className="video-filters__field video-filters__field--genre">
            <Autocomplete
              multiple
              size="small"
              options={filterData.genere}
              value={localGenres}
              onChange={handleGenreChange}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <Chip
                      key={key}
                      label={option}
                      {...tagProps}
                      size="small"
                      className="video-filters__chip"
                    />
                  );
                })
              }
              renderInput={(params) => (
                <TextField {...params} label="Genres" placeholder="Action, Drama..." />
              )}
              className="video-filters__autocomplete"
            />
          </Box>

          {/* Tags Filter */}
          <Box className="video-filters__field video-filters__field--tags">
            <Autocomplete
              multiple
              size="small"
              options={filterData.tags}
              value={localTags}
              onChange={handleTagChange}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <Chip
                      key={key}
                      label={option}
                      {...tagProps}
                      size="small"
                      className="video-filters__chip"
                    />
                  );
                })
              }
              renderInput={(params) => (
                <TextField {...params} label="Tags" placeholder="Trending, Popular..." />
              )}
              className="video-filters__autocomplete"
            />
          </Box>

          {/* Platform Filter */}
          <Box className="video-filters__field video-filters__field--platform">
            <Autocomplete
              multiple
              size="small"
              options={filterData.platform}
              value={localPlatform}
              onChange={handlePlatformChange}
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <Chip
                      key={key}
                      label={option}
                      {...tagProps}
                      size="small"
                      className="video-filters__chip"
                    />
                  );
                })
              }
              renderInput={(params) => (
                <TextField {...params} label="Platform" placeholder="android, ios, web..." />
              )}
              className="video-filters__autocomplete"
            />
          </Box>

          {/* App Package Name Filter */}
          <Box className="video-filters__field video-filters__field--package">
            <Autocomplete
              multiple
              size="small"
              options={filterData.appPackageName}
              value={localAppPackageName}
              onChange={handleAppPackageNameChange}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <Chip
                      key={key}
                      label={option}
                      {...tagProps}
                      size="small"
                      className="video-filters__chip"
                    />
                  );
                })
              }
              renderInput={(params) => (
                <TextField {...params} label="App Package" placeholder="com.example.app..." />
              )}
              className="video-filters__autocomplete"
            />
          </Box>
        </Box>

        {/* Date Range & Actions Row */}
        <Box className="video-filters__secondary-row">
          {/* Date Range */}
          <Box className="video-filters__date-group">
            <TextField
              type="date"
              label="From"
              size="small"
              value={localFromCreatedAt ?? ''}
              onChange={(e) => {
                setLocalFromCreatedAt(e.target.value || null);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: {
                  color: 'text.primary',
                  cursor: 'pointer',
                  '& input': {
                    color: 'text.primary',
                    cursor: 'pointer',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'text.primary',
                  },
                },
              }}
              sx={{
                '& .MuiSvgIcon-root': {
                  color: 'text.primary',
                },
                '& .MuiInputBase-root': {
                  cursor: 'pointer',
                },
                '& input[type="date"]': {
                  cursor: 'pointer',
                  '&::-webkit-calendar-picker-indicator': {
                    filter: 'invert(1)',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    opacity: 0,
                  },
                },
                '& .MuiInputBase-root::before': {
                  content: '""',
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z'/%3E%3C/svg%3E")`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  pointerEvents: 'none',
                  zIndex: 1,
                },
              }}
              className="video-filters__date-input"
            />
            <TextField
              type="date"
              label="To"
              size="small"
              value={localToCreatedAt ?? ''}
              onChange={(e) => {
                setLocalToCreatedAt(e.target.value || null);
              }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                sx: {
                  color: 'text.primary',
                  cursor: 'pointer',
                  '& input': {
                    color: 'text.primary',
                    cursor: 'pointer',
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'text.primary',
                  },
                },
              }}
              sx={{
                '& .MuiSvgIcon-root': {
                  color: 'text.primary',
                },
                '& .MuiInputBase-root': {
                  cursor: 'pointer',
                },
                '& input[type="date"]': {
                  cursor: 'pointer',
                  '&::-webkit-calendar-picker-indicator': {
                    filter: 'invert(1)',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    opacity: 0,
                  },
                },
                '& .MuiInputBase-root::before': {
                  content: '""',
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '16px',
                  height: '16px',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z'/%3E%3C/svg%3E")`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  pointerEvents: 'none',
                  zIndex: 1,
                },
              }}
              className="video-filters__date-input"
            />
          </Box>

          {/* Action Buttons */}
          <Box className="video-filters__actions">
            <Button
              variant="contained"
              size="small"
              onClick={handleApplyFilters}
              className="video-filters__button video-filters__button--apply"
              disableElevation
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClearFilters}
              startIcon={<ClearIcon />}
              className="video-filters__button video-filters__button--clear"
            >
              Clear
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default VideoFilters;
