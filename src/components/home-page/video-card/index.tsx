import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Card, CardContent, CardMedia, Chip, Typography, Box, IconButton } from '@mui/material';
import { format } from 'date-fns';
import { memo } from 'react';
import type { Video } from '@/types';
import type { FC } from 'react';
import './index.scss';

interface VideoCardProps {
  onVideoClick: (video: Video) => void;
  video: Video;
}

const VideoCard: FC<VideoCardProps> = ({ video, onVideoClick }) => {
  const formattedDate = format(new Date(video.createdAt), 'MMM dd, yyyy');

  const handleClick = () => {
    onVideoClick(video);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onVideoClick(video);
    }
  };

  return (
    <Card
      className="video-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Play video: ${video.title}`}
    >
      <Box className="video-card__thumbnail-wrapper">
        <CardMedia
          component="img"
          height="200"
          image={video.thumbnailUrl}
          alt={video.title}
          className="video-card__thumbnail"
          loading="lazy"
        />
        <Box className="video-card__overlay">
          <IconButton className="video-card__play-button" aria-label="Play video">
            <PlayCircleOutlineIcon />
          </IconButton>
        </Box>
      </Box>

      <CardContent className="video-card__content">
        <Typography variant="h6" className="video-card__title" title={video.title}>
          {video.title}
        </Typography>

        <Box className="video-card__genre">
          <Typography variant="body2" className="video-card__genre-label">
            Genre:
          </Typography>
          {video.genere.slice(0, 2).map((genre) => (
            <Chip key={genre} label={genre} size="small" className="video-card__genre-chip" />
          ))}
        </Box>

        <Box className="video-card__tags">
          {video.tags.slice(0, 3).map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              className="video-card__tag-chip"
            />
          ))}
          {video.tags.length > 3 && (
            <Typography variant="caption" className="video-card__more-tags">
              +{video.tags.length - 3} more
            </Typography>
          )}
        </Box>

        <Box className="video-card__date">
          <CalendarTodayIcon className="video-card__date-icon" />
          <Typography variant="caption" className="video-card__date-text">
            {formattedDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default memo(VideoCard);
