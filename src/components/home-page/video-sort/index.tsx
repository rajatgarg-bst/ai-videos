import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useCallback } from 'react';
import { setSortDuration } from '@/store/home-page/home-page-slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { SelectChangeEvent } from '@mui/material';
import type { FC } from 'react';
import './index.scss';

const VideoSort: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedFilters } = useAppSelector((state) => state.homePage);

  const handleSortChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const { value } = event.target;
      dispatch(setSortDuration(value as 'asc' | 'desc'));
    },
    [dispatch]
  );

  return (
    <Box className="video-sort">
      <FormControl size="small" className="video-sort__control">
        <InputLabel id="video-sort-label">Sort By</InputLabel>
        <Select
          labelId="video-sort-label"
          id="video-sort-select"
          value={selectedFilters.sortDuration}
          onChange={handleSortChange}
          label="Sort By"
          className="video-sort__select"
          sx={{
            '&:hover': {
              backgroundColor: 'var(--bg-secondary)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--border-color)',
            },
          }}
        >
          <MenuItem
            value="desc"
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(20, 184, 166, 0.12)',
                color: 'var(--primary-color)',
                fontWeight: 500,
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'rgba(20, 184, 166, 0.12)',
              },
            }}
          >
            Newest
          </MenuItem>
          <MenuItem
            value="asc"
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(20, 184, 166, 0.12)',
                color: 'var(--primary-color)',
                fontWeight: 500,
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'rgba(20, 184, 166, 0.12)',
              },
            }}
          >
            Oldest
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default VideoSort;
