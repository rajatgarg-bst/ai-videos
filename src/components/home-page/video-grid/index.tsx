import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useEffect, useState, useCallback } from 'react';
import ErrorMessage from '@/components/common/error-message';
import LoadingSpinner from '@/components/common/loading-spinner';
import { setSelectedVideo } from '@/store/home-page/home-page-slice';
import { fetchVideos } from '@/store/home-page/home-page-thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import VideoCard from '../video-card';
import VideoModal from '../video-modal';
import type { Video } from '@/types';
import type { FC } from 'react';
import './index.scss';

const VideoGrid: FC = () => {
  const dispatch = useAppDispatch();
  const { videos, loading, error, pagination, selectedFilters, selectedVideo } = useAppSelector(
    (state) => state.homePage
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  // Fetch videos whenever page or filters change
  useEffect(() => {
    void dispatch(
      fetchVideos({ filters: selectedFilters, page: currentPage, limit: itemsPerPage })
    );
  }, [dispatch, selectedFilters, currentPage]);

  const handlePageChange = useCallback((_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0 });
  }, []);

  const handleVideoClick = useCallback(
    (video: Video) => {
      dispatch(setSelectedVideo(video));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(setSelectedVideo(null));
  }, [dispatch]);

  const handleRetryFetch = useCallback(() => {
    void dispatch(
      fetchVideos({ filters: selectedFilters, page: currentPage, limit: itemsPerPage })
    );
  }, [dispatch, selectedFilters, currentPage, itemsPerPage]);

  if (loading) {
    return <LoadingSpinner message="Loading videos..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetryFetch} />;
  }

  if (videos.length === 0) {
    return (
      <Box className="video-grid__empty">
        <Typography variant="h6" className="video-grid__empty-title">
          No videos found
        </Typography>
        <Typography variant="body1" className="video-grid__empty-text">
          Try adjusting your filters or clearing them to see more results.
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="video-grid">
      <Grid container spacing={4}>
        {videos.map((video) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={video.id}>
            <VideoCard video={video} onVideoClick={handleVideoClick} />
          </Grid>
        ))}
      </Grid>

      {pagination && pagination.totalPages > 1 && (
        <Box className="video-grid__pagination">
          <Pagination
            count={pagination.totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            className="video-grid__pagination-component"
          />
          <Typography variant="body2" className="video-grid__pagination-info">
            Showing {(currentPage - 1) * itemsPerPage + 1} -{' '}
            {Math.min(currentPage * itemsPerPage, pagination.totalItems)} of {pagination.totalItems}{' '}
            videos
          </Typography>
        </Box>
      )}

      <VideoModal video={selectedVideo} open={!!selectedVideo} onClose={handleCloseModal} />
    </Box>
  );
};

export default VideoGrid;
