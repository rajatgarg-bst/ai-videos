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
  genere: [
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Sci-Fi',
    'Thriller',
    'Romance',
    'Documentary',
    'Adventure',
    'Entertainment',
    'Mystery',
    'Nature',
  ],
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
  platform: ['android', 'ios', 'web'],
  appPackageName: [
    'com.example.adventure',
    'com.example.comedy',
    'com.example.drama',
    'com.example.horror',
    'com.example.scifi',
    'com.example.thriller',
    'com.example.romance',
    'com.example.documentary',
    'com.example.heroes',
    'com.example.laughs',
    'com.example.broken',
    'com.example.conjuring',
    'com.example.galaxy',
    'com.example.shadows',
    'com.example.forever',
    'com.example.ocean',
    'com.example.ninja',
    'com.example.standup',
    'com.example.silent',
    'com.example.exorcism',
  ],
};

// Mock video data
const videos = [
  {
    id: 'vid_001',
    title: 'Epic Adventure Quest',
    description: 'Join us on an epic journey through uncharted territories.',
    genere: ['Action', 'Adventure'],
    tags: ['Popular', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video1/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 180,
    createdAt: '2024-01-15T10:30:00Z',
    appId: 'app_001',
    appPackageName: 'com.example.adventure',
    platform: 'android',
  },
  {
    id: 'vid_002',
    title: 'Comedy Night Live',
    description: 'Laugh out loud with our stand-up comedy special.',
    genere: ['Comedy', 'Entertainment'],
    tags: ['Trending', 'New Release'],
    thumbnailUrl: 'https://picsum.photos/seed/video2/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 240,
    createdAt: '2024-02-20T14:45:00Z',
    appId: 'app_002',
    appPackageName: 'com.example.comedy',
    platform: 'ios',
  },
  {
    id: 'vid_003',
    title: 'The Last Stand',
    description: 'A gripping drama about survival and resilience.',
    genere: ['Drama'],
    tags: ['Award Winner', 'Classic'],
    thumbnailUrl: 'https://picsum.photos/seed/video3/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 300,
    createdAt: '2024-03-10T09:15:00Z',
    appId: 'app_003',
    appPackageName: 'com.example.drama',
    platform: 'web',
  },
  {
    id: 'vid_004',
    title: 'Haunted Mansion',
    description: 'Experience the scariest haunted house adventure.',
    genere: ['Horror', 'Thriller'],
    tags: ['Popular', 'New Release'],
    thumbnailUrl: 'https://picsum.photos/seed/video4/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 210,
    createdAt: '2024-01-25T16:20:00Z',
    appId: 'app_004',
    appPackageName: 'com.example.horror',
    platform: 'android',
  },
  {
    id: 'vid_005',
    title: 'Space Odyssey 2099',
    description: 'Explore the mysteries of deep space in this sci-fi epic.',
    genere: ['Sci-Fi', 'Adventure'],
    tags: ['4K', 'Trending'],
    thumbnailUrl: 'https://picsum.photos/seed/video5/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 360,
    createdAt: '2024-02-05T11:00:00Z',
    appId: 'app_005',
    appPackageName: 'com.example.scifi',
    platform: 'ios',
  },
  {
    id: 'vid_006',
    title: 'Mystery at Midnight',
    description: 'Solve the puzzle before time runs out.',
    genere: ['Thriller', 'Mystery'],
    tags: ['Award Winner', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video6/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 195,
    createdAt: '2024-03-15T13:30:00Z',
    appId: 'app_006',
    appPackageName: 'com.example.thriller',
    platform: 'web',
  },
  {
    id: 'vid_007',
    title: 'Love in Paris',
    description: 'A romantic tale set in the heart of Paris.',
    genere: ['Romance', 'Drama'],
    tags: ['Classic', 'Popular'],
    thumbnailUrl: 'https://picsum.photos/seed/video7/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 270,
    createdAt: '2024-01-30T15:45:00Z',
    appId: 'app_007',
    appPackageName: 'com.example.romance',
    platform: 'android',
  },
  {
    id: 'vid_008',
    title: 'Nature Unveiled',
    description: 'Discover the wonders of the natural world.',
    genere: ['Documentary'],
    tags: ['Family Friendly', '4K'],
    thumbnailUrl: 'https://picsum.photos/seed/video8/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 320,
    createdAt: '2024-02-28T10:00:00Z',
    appId: 'app_008',
    appPackageName: 'com.example.documentary',
    platform: 'ios',
  },
  {
    id: 'vid_009',
    title: 'Action Heroes Unite',
    description: 'The ultimate superhero team-up you have been waiting for.',
    genere: ['Action', 'Adventure'],
    tags: ['New Release', '4K'],
    thumbnailUrl: 'https://picsum.photos/seed/video9/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 280,
    createdAt: '2024-03-20T12:15:00Z',
    appId: 'app_009',
    appPackageName: 'com.example.heroes',
    platform: 'web',
  },
  {
    id: 'vid_010',
    title: 'Laughs Unlimited',
    description: 'Non-stop comedy for the whole family.',
    genere: ['Comedy', 'Entertainment'],
    tags: ['Popular', 'Family Friendly'],
    thumbnailUrl: 'https://picsum.photos/seed/video10/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 200,
    createdAt: '2024-01-18T14:00:00Z',
    appId: 'app_010',
    appPackageName: 'com.example.laughs',
    platform: 'android',
  },
  {
    id: 'vid_011',
    title: 'Broken Dreams',
    description: 'A powerful story of hope and redemption.',
    genere: ['Drama'],
    tags: ['Award Winner', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video11/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 310,
    createdAt: '2024-02-12T16:30:00Z',
    appId: 'app_011',
    appPackageName: 'com.example.broken',
    platform: 'ios',
  },
  {
    id: 'vid_012',
    title: 'The Conjuring Hour',
    description: 'The most terrifying horror experience of the year.',
    genere: ['Horror', 'Thriller'],
    tags: ['Trending', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video12/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 220,
    createdAt: '2024-03-08T18:45:00Z',
    appId: 'app_012',
    appPackageName: 'com.example.conjuring',
    platform: 'web',
  },
  {
    id: 'vid_013',
    title: 'Galaxy Warriors',
    description: 'An intergalactic battle for the fate of the universe.',
    genere: ['Sci-Fi', 'Action'],
    tags: ['Popular', '4K'],
    thumbnailUrl: 'https://picsum.photos/seed/video13/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 290,
    createdAt: '2024-01-22T11:20:00Z',
    appId: 'app_013',
    appPackageName: 'com.example.galaxy',
    platform: 'android',
  },
  {
    id: 'vid_014',
    title: 'Dark Shadows',
    description: 'Nothing is as it seems in this psychological thriller.',
    genere: ['Thriller', 'Mystery'],
    tags: ['New Release', 'Trending'],
    thumbnailUrl: 'https://picsum.photos/seed/video14/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 250,
    createdAt: '2024-02-18T09:30:00Z',
    appId: 'app_014',
    appPackageName: 'com.example.shadows',
    platform: 'ios',
  },
  {
    id: 'vid_015',
    title: 'Forever Together',
    description: 'A heartwarming love story that transcends time.',
    genere: ['Romance', 'Drama'],
    tags: ['Family Friendly', 'Popular'],
    thumbnailUrl: 'https://picsum.photos/seed/video15/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 260,
    createdAt: '2024-03-25T13:00:00Z',
    appId: 'app_015',
    appPackageName: 'com.example.forever',
    platform: 'web',
  },
  {
    id: 'vid_016',
    title: 'Ocean Mysteries',
    description: 'Dive deep into the secrets of the ocean.',
    genere: ['Documentary', 'Nature'],
    tags: ['4K', 'Award Winner'],
    thumbnailUrl: 'https://picsum.photos/seed/video16/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 330,
    createdAt: '2024-01-28T15:15:00Z',
    appId: 'app_016',
    appPackageName: 'com.example.ocean',
    platform: 'android',
  },
  {
    id: 'vid_017',
    title: 'Ninja Warriors',
    description: 'The ultimate martial arts action adventure.',
    genere: ['Action', 'Adventure'],
    tags: ['Trending', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video17/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 190,
    createdAt: '2024-02-22T10:45:00Z',
    appId: 'app_017',
    appPackageName: 'com.example.ninja',
    platform: 'ios',
  },
  {
    id: 'vid_018',
    title: 'Stand-Up Special',
    description: 'The funniest stand-up comedy you will see this year.',
    genere: ['Comedy', 'Entertainment'],
    tags: ['New Release', 'HD'],
    thumbnailUrl: 'https://picsum.photos/seed/video18/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 230,
    createdAt: '2024-03-12T12:00:00Z',
    appId: 'app_018',
    appPackageName: 'com.example.standup',
    platform: 'web',
  },
  {
    id: 'vid_019',
    title: 'Silent Tears',
    description: 'An emotional journey through hardship and triumph.',
    genere: ['Drama'],
    tags: ['Classic', 'Award Winner'],
    thumbnailUrl: 'https://picsum.photos/seed/video19/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 305,
    createdAt: '2024-01-20T14:30:00Z',
    appId: 'app_019',
    appPackageName: 'com.example.silent',
    platform: 'android',
  },
  {
    id: 'vid_020',
    title: 'The Exorcism',
    description: 'Witness the most terrifying exorcism ever filmed.',
    genere: ['Horror', 'Thriller'],
    tags: ['Popular', '4K'],
    thumbnailUrl: 'https://picsum.photos/seed/video20/400/225',
    videoUrl: 'https://pub-34c63a5d05ba4fdaac460ae5a71188f3.r2.dev/videos/enc.mp4',
    duration: 215,
    createdAt: '2024-02-25T16:00:00Z',
    appId: 'app_020',
    appPackageName: 'com.example.exorcism',
    platform: 'ios',
  },
];

// New filters endpoint (NEW API)
app.get('/media/v1/filters', (req, res) => {
  setTimeout(() => {
    res.json(filterData);
  }, 300);
});

// Legacy filters endpoint for backward compatibility
app.get('/api/filters', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      data: {
        genres: filterData.genere,
        tags: filterData.tags,
      },
    });
  }, 300);
});

// GET videos endpoint with cursor-based pagination (NEW API)
app.get('/media/v1/video-list', (req, res) => {
  const {
    tags,
    genere, // Note: API spec has typo "genere" instead of "genre"
    appPackageName,
    platform,
    fromCreatedAt,
    toCreatedAt,
    sortBy = 'createdAt',
    sortDuration = 'asc',
    limit = 20,
    cursor,
  } = req.query;

  let filteredVideos = [...videos];

  // Apply genre filter (genere is an array in video object)
  if (genere) {
    const genreArray = Array.isArray(genere) ? genere : genere.split(',');
    filteredVideos = filteredVideos.filter((video) =>
      video.genere.some((g) => genreArray.includes(g))
    );
  }

  // Apply tag filter
  if (tags) {
    const tagArray = Array.isArray(tags) ? tags : tags.split(',');
    filteredVideos = filteredVideos.filter((video) =>
      video.tags.some((tag) => tagArray.includes(tag))
    );
  }

  // Apply appPackageName filter
  if (appPackageName) {
    const appPackageArray = Array.isArray(appPackageName)
      ? appPackageName
      : appPackageName.split(',');
    filteredVideos = filteredVideos.filter((video) =>
      appPackageArray.includes(video.appPackageName)
    );
  }

  // Apply platform filter
  if (platform) {
    const platformArray = Array.isArray(platform) ? platform : platform.split(',');
    filteredVideos = filteredVideos.filter((video) => platformArray.includes(video.platform));
  }

  // Apply date range filter
  if (fromCreatedAt) {
    const fromDate = new Date(fromCreatedAt);
    filteredVideos = filteredVideos.filter((video) => new Date(video.createdAt) >= fromDate);
  }

  if (toCreatedAt) {
    const toDate = new Date(toCreatedAt);
    // Set to end of day for inclusive filtering
    toDate.setHours(23, 59, 59, 999);
    filteredVideos = filteredVideos.filter((video) => new Date(video.createdAt) <= toDate);
  }

  // Apply sorting (sortBy should be "createdAt" as per spec)
  if (sortBy === 'createdAt') {
    if (sortDuration === 'desc') {
      filteredVideos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      filteredVideos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
  }

  // Cursor-based pagination
  let startIndex = 0;
  if (cursor) {
    // Cursor is base64 encoded index
    try {
      startIndex = parseInt(Buffer.from(cursor, 'base64').toString('utf-8'), 10);
    } catch (e) {
      startIndex = 0;
    }
  }

  const limitNum = parseInt(limit, 10);
  const endIndex = startIndex + limitNum;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  // Generate next cursor if there are more items
  let nextCursor;
  if (endIndex < filteredVideos.length) {
    nextCursor = Buffer.from(endIndex.toString()).toString('base64');
  }

  setTimeout(() => {
    res.json({
      limit: limitNum,
      cursor: nextCursor,
      videos: paginatedVideos,
    });
  }, 500);
});

// Legacy endpoint for backward compatibility
app.get('/api/videos', (req, res) => {
  const { genres, tags, dateFrom, dateTo, sortBy, page = 1, limit = 12 } = req.query;

  let filteredVideos = [...videos];

  // Apply genre filter (legacy uses 'genres', matches against video.genere array)
  if (genres) {
    const genreArray = Array.isArray(genres) ? genres : genres.split(',');
    filteredVideos = filteredVideos.filter((video) =>
      video.genere.some((g) => genreArray.includes(g))
    );
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
