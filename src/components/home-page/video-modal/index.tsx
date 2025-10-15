import CloseIcon from '@mui/icons-material/Close';
import { Box, Chip, IconButton, Modal, Typography, Fade } from '@mui/material';
import { format } from 'date-fns';
import { useEffect, useRef, useCallback, memo } from 'react';
import type { Video } from '@/types';
import type { FC } from 'react';
import './index.scss';

interface VideoModalProps {
  onClose: () => void;
  open: boolean;
  video: null | Video;
}

const VideoModal: FC<VideoModalProps> = ({ video, open, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.muted = false;
      void videoRef.current.play();
    }
  }, [open]);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  if (!video) return null;

  const formattedDate = format(new Date(video.createdAt), 'MMMM dd, yyyy');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      className="video-modal"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        },
      }}
      aria-labelledby="video-modal-title"
      aria-describedby="video-modal-description"
    >
      <Fade in={open}>
        <Box className="video-modal__container" onKeyDown={handleKeyDown}>
          <IconButton
            className="video-modal__close-button"
            onClick={handleClose}
            aria-label="Close video"
          >
            <CloseIcon />
          </IconButton>

          <Box className="video-modal__video-wrapper">
            <video
              ref={videoRef}
              className="video-modal__video"
              controls
              autoPlay
              controlsList="nodownload"
              preload="metadata"
              aria-label={`Video: ${video.name}`}
            >
              <source src={video.videoUrl} type="video/mp4" />
              <track kind="captions" src="" label="English" />
              Your browser does not support the video tag.
            </video>
          </Box>

          <Box className="video-modal__details">
            <Typography variant="h5" id="video-modal-title" className="video-modal__title">
              {video.name}
            </Typography>

            <Box className="video-modal__meta">
              <Box className="video-modal__left-group">
                <Box className="video-modal__genre">
                  <Typography variant="body2" className="video-modal__label">
                    Genre:
                  </Typography>
                  <Chip label={video.genre} size="small" variant="outlined" />
                </Box>

                <Box className="video-modal__tags">
                  <Typography variant="body2" className="video-modal__label">
                    Tags:
                  </Typography>
                  <Box className="video-modal__tags-list">
                    {video.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Typography variant="body2" className="video-modal__date">
                {formattedDate}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default memo(VideoModal);
