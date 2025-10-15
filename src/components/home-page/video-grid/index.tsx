import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect, useCallback } from 'react';
import ErrorMessage from '@/components/common/error-message';
import LoadingSpinner from '@/components/common/loading-spinner';
import { setSelectedVideo, setCursor } from '@/store/home-page/home-page-slice';
import { fetchVideos } from '@/store/home-page/home-page-thunks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import VideoCard from '../video-card';
import VideoModal from '../video-modal';
import type { Video } from '@/types';
import type { FC } from 'react';
import './index.scss';

const VideoGrid: FC = () => {
  const dispatch = useAppDispatch();
  const { videos, loading, error, cursor, hasMore, selectedFilters, selectedVideo } =
    useAppSelector((state) => state.homePage);

  const itemsPerPage = 20; // Default limit as per API spec

  // Fetch initial videos when filters change
  useEffect(() => {
    // Reset cursor when filters change
    dispatch(setCursor(null));
    void dispatch(
      fetchVideos({ filters: { ...selectedFilters, cursor: null }, limit: itemsPerPage })
    );
  }, [
    dispatch,
    selectedFilters.tags,
    selectedFilters.genere,
    selectedFilters.appPackageName,
    selectedFilters.platform,
    selectedFilters.fromCreatedAt,
    selectedFilters.toCreatedAt,
    selectedFilters.sortBy,
    selectedFilters.sortDuration,
  ]);

  const handleLoadMore = useCallback(() => {
    if (cursor && hasMore) {
      void dispatch(fetchVideos({ filters: { ...selectedFilters, cursor }, limit: itemsPerPage }));
    }
  }, [dispatch, selectedFilters, cursor, hasMore, itemsPerPage]);

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
      fetchVideos({ filters: { ...selectedFilters, cursor: null }, limit: itemsPerPage })
    );
  }, [dispatch, selectedFilters, itemsPerPage]);

  if (loading && videos.length === 0) {
    return <LoadingSpinner message="Loading videos..." />;
  }

  if (error && videos.length === 0) {
    return <ErrorMessage message={error} onRetry={handleRetryFetch} />;
  }

  if (videos.length === 0 && !loading) {
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

      {hasMore && cursor && (
        <Box className="video-grid__load-more">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleLoadMore}
            disabled={loading}
            className="video-grid__load-more-button"
          >
            {loading ? 'Loading...' : 'Load More Videos'}
          </Button>
          <Typography variant="body2" className="video-grid__load-more-info">
            Showing {videos.length} videos
          </Typography>
        </Box>
      )}

      {!hasMore && videos.length > 0 && (
        <Box className="video-grid__end-message">
          <Typography variant="body2" className="video-grid__end-text">
            You&apos;ve reached the end of the list
          </Typography>
        </Box>
      )}

      <VideoModal video={selectedVideo} open={!!selectedVideo} onClose={handleCloseModal} />
    </Box>
  );
};

export default VideoGrid;
