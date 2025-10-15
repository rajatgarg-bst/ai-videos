import { Box, Container } from '@mui/material';
import Header from '@/components/common/header';
import VideoFilters from '@/components/home-page/video-filters';
import VideoGrid from '@/components/home-page/video-grid';
import VideoSort from '@/components/home-page/video-sort';
import { withAuth } from '@/hoc/withAuth';
import type { FC } from 'react';
import './index.scss';

const HomePage: FC = () => {
  return (
    <div className="home-page-wrapper">
      <Header />
      <Box className="home-page">
        <Container maxWidth="lg">
          <h1 className="home-page__title">Gaming Videos</h1>
        </Container>

        <Container maxWidth="xl" className="home-page__container" sx={{ pt: 1.5 }}>
          <VideoFilters />
          <VideoSort />
          <VideoGrid />
        </Container>
      </Box>
    </div>
  );
};

export default withAuth(HomePage);
