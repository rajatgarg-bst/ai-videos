import cors from 'cors';
import express from 'express';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Google Login endpoint
app.post('/auth/v1/google-login', (req, res) => {
  const { idToken } = req.body;

  // Validate idToken exists
  if (!idToken) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'idToken is required',
    });
  }

  // Mock successful login response
  // In production, you would verify the idToken with Google's API
  const mockResponse = {
    accessToken: 'mock_access_token_' + Date.now(),
    email: 'user@example.com',
    name: 'John Doe',
    profileUrl: 'https://lh3.googleusercontent.com/a/default-user',
  };

  return res.status(200).json(mockResponse);
});

// Mock data for filters
const filterData = {
  genres: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance', 'Documentary'],
  tags: [
    'Popular',
    'Trending',
    'New Release',
    'Award Winner',
    'Classic',
    'Family Friendly',
    'HD',
    '4K',
  ],
};

// Mock video data
const videos = [
  {
    id: 1,
    name: 'Epic Adventure Quest',
    genre: 'Action',
    tags: ['Popular', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video1/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Comedy Night Live',
    genre: 'Comedy',
    tags: ['Trending', 'New Release'],
    thumbnail: 'https://picsum.photos/seed/video2/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-20T14:45:00Z',
  },
  {
    id: 3,
    name: 'The Last Stand',
    genre: 'Drama',
    tags: ['Award Winner', 'Classic'],
    thumbnail: 'https://picsum.photos/seed/video3/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-10T09:15:00Z',
  },
  {
    id: 4,
    name: 'Haunted Mansion',
    genre: 'Horror',
    tags: ['Popular', 'New Release'],
    thumbnail: 'https://picsum.photos/seed/video4/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-25T16:20:00Z',
  },
  {
    id: 5,
    name: 'Space Odyssey 2099',
    genre: 'Sci-Fi',
    tags: ['4K', 'Trending'],
    thumbnail: 'https://picsum.photos/seed/video5/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-05T11:00:00Z',
  },
  {
    id: 6,
    name: 'Mystery at Midnight',
    genre: 'Thriller',
    tags: ['Award Winner', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video6/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-15T13:30:00Z',
  },
  {
    id: 7,
    name: 'Love in Paris',
    genre: 'Romance',
    tags: ['Classic', 'Popular'],
    thumbnail: 'https://picsum.photos/seed/video7/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-30T15:45:00Z',
  },
  {
    id: 8,
    name: 'Nature Unveiled',
    genre: 'Documentary',
    tags: ['Family Friendly', '4K'],
    thumbnail: 'https://picsum.photos/seed/video8/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-28T10:00:00Z',
  },
  {
    id: 9,
    name: 'Action Heroes Unite',
    genre: 'Action',
    tags: ['New Release', '4K'],
    thumbnail: 'https://picsum.photos/seed/video9/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-20T12:15:00Z',
  },
  {
    id: 10,
    name: 'Laughs Unlimited',
    genre: 'Comedy',
    tags: ['Popular', 'Family Friendly'],
    thumbnail: 'https://picsum.photos/seed/video10/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-18T14:00:00Z',
  },
  {
    id: 11,
    name: 'Broken Dreams',
    genre: 'Drama',
    tags: ['Award Winner', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video11/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-12T16:30:00Z',
  },
  {
    id: 12,
    name: 'The Conjuring Hour',
    genre: 'Horror',
    tags: ['Trending', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video12/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-08T18:45:00Z',
  },
  {
    id: 13,
    name: 'Galaxy Warriors',
    genre: 'Sci-Fi',
    tags: ['Popular', '4K'],
    thumbnail: 'https://picsum.photos/seed/video13/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-22T11:20:00Z',
  },
  {
    id: 14,
    name: 'Dark Shadows',
    genre: 'Thriller',
    tags: ['New Release', 'Trending'],
    thumbnail: 'https://picsum.photos/seed/video14/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-18T09:30:00Z',
  },
  {
    id: 15,
    name: 'Forever Together',
    genre: 'Romance',
    tags: ['Family Friendly', 'Popular'],
    thumbnail: 'https://picsum.photos/seed/video15/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-25T13:00:00Z',
  },
  {
    id: 16,
    name: 'Ocean Mysteries',
    genre: 'Documentary',
    tags: ['4K', 'Award Winner'],
    thumbnail: 'https://picsum.photos/seed/video16/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-28T15:15:00Z',
  },
  {
    id: 17,
    name: 'Ninja Warriors',
    genre: 'Action',
    tags: ['Trending', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video17/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-22T10:45:00Z',
  },
  {
    id: 18,
    name: 'Stand-Up Special',
    genre: 'Comedy',
    tags: ['New Release', 'HD'],
    thumbnail: 'https://picsum.photos/seed/video18/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-03-12T12:00:00Z',
  },
  {
    id: 19,
    name: 'Silent Tears',
    genre: 'Drama',
    tags: ['Classic', 'Award Winner'],
    thumbnail: 'https://picsum.photos/seed/video19/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-01-20T14:30:00Z',
  },
  {
    id: 20,
    name: 'The Exorcism',
    genre: 'Horror',
    tags: ['Popular', '4K'],
    thumbnail: 'https://picsum.photos/seed/video20/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    createdAt: '2024-02-25T16:00:00Z',
  },
];

// GET filters endpoint
app.get('/api/filters', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      data: filterData,
    });
  }, 300);
});

// GET videos endpoint with filters and pagination
app.get('/api/videos', (req, res) => {
  const { genres, tags, dateFrom, dateTo, sortBy, page = 1, limit = 12 } = req.query;

  let filteredVideos = [...videos];

  // Apply genre filter
  if (genres) {
    const genreArray = Array.isArray(genres) ? genres : genres.split(',');
    filteredVideos = filteredVideos.filter((video) => genreArray.includes(video.genre));
  }

  // Apply tag filter
  if (tags) {
    const tagArray = Array.isArray(tags) ? tags : tags.split(',');
    filteredVideos = filteredVideos.filter((video) =>
      video.tags.some((tag) => tagArray.includes(tag))
    );
  }

  // Apply date range filter
  if (dateFrom) {
    const fromDate = new Date(dateFrom);
    filteredVideos = filteredVideos.filter((video) => new Date(video.createdAt) >= fromDate);
  }

  if (dateTo) {
    const toDate = new Date(dateTo);
    // Set to end of day for inclusive filtering
    toDate.setHours(23, 59, 59, 999);
    filteredVideos = filteredVideos.filter((video) => new Date(video.createdAt) <= toDate);
  }

  // Apply sorting
  if (sortBy === 'newest') {
    filteredVideos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === 'oldest') {
    filteredVideos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  // Pagination
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  setTimeout(() => {
    res.json({
      success: true,
      data: {
        videos: paginatedVideos,
        pagination: {
          currentPage: pageNum,
          totalPages: Math.ceil(filteredVideos.length / limitNum),
          totalItems: filteredVideos.length,
          itemsPerPage: limitNum,
        },
      },
    });
  }, 500);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
