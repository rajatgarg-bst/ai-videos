# 🤖 Copilot Instructions - Video Gallery Project

> **📍 Location:** `.github/copilot-instructions.md`  
> **🤖 Auto-discovered by:** GitHub Copilot, Cursor, Windsurf, all major AI assistants  
> **Tech Stack:** Vite 7.1.9 | React 19.1.1 | TypeScript 5.9.3 | MUI 7.3.4 | Redux Toolkit 2.9.0

---

## 🚨 CRITICAL RULES (Check Before EVERY Change)

### P0 - MUST FOLLOW (Never Skip)

```typescript
// Type Safety
✅ DO: interface Props { title: string }
❌ NEVER: any, !, @ts-ignore

// Styling
✅ DO: color: var(--primary-color); padding: $spacing-lg;
❌ NEVER: color: #14b8a6; padding: 24px;

// CSS Classes
✅ DO: .video-card__title--large (BEM, kebab-case)
❌ NEVER: .videoCardTitle, #my-id

// Imports
✅ DO: import type { Video } from '@/types'; // Cross-directory uses @/
❌ NEVER: import { Video } from '../types'; // For cross-directory

// Redux
✅ DO: useAppDispatch(), useAppSelector() from '@/store/hooks'
❌ NEVER: useDispatch(), useSelector() (not typed)

// Files
✅ DO: Create .tsx/.ts/.scss files
❌ NEVER: Create new .md files (append to THIS file instead)
```

### Workflow (Mandatory)

```
1. THINK  → List variables needed: "$spacing-lg, var(--primary-color)"
2. CODE   → Use only those variables
3. VERIFY → Run P0 checklist above
4. LINT   → npm run lint:fix && npm run lint:css:fix
```

---

## 📦 Quick Reference

### Design Tokens (Always Use These)

**Colors (CSS Variables - Runtime Theming):**

```scss
// Brand
var(--primary-color)    // #14b8a6 teal
var(--secondary-color)  // #6366f1 indigo
var(--accent-color)     // #f59e0b amber

// Text
var(--text-primary)     // #1f2937 dark gray
var(--text-secondary)   // #6b7280 medium gray
var(--text-tertiary)    // #9ca3af light gray

// Background
var(--bg-primary)       // #ffffff white
var(--bg-secondary)     // #f9fafb light gray
var(--bg-tertiary)      // #f3f4f6 lighter gray

// State
var(--success-color)    // #10b981 green
var(--error-color)      // #ef4444 red
var(--warning-color)    // #f59e0b amber
var(--info-color)       // #3b82f6 blue
```

**Spacing (SCSS Variables - Static):**

```scss
$spacing-xs: 4px; // Tiny gaps
$spacing-sm: 8px; // Small padding
$spacing-md: 16px; // Default spacing
$spacing-lg: 24px; // Large padding
$spacing-xl: 32px; // Section spacing
$spacing-2xl: 48px; // Major sections
$spacing-3xl: 64px; // Hero sections
```

**Typography:**

```scss
$font-size-xs: 12px;  → $font-size-4xl: 36px
$font-weight-light: 300; → $font-weight-bold: 700
$line-height-tight: 1.25; → $line-height-loose: 2
```

**Other:**

```scss
$border-radius-sm: 4px; → $border-radius-full: 9999px
$shadow-sm → $shadow-2xl
$transition-fast: 150ms; $transition-base: 300ms; $transition-slow: 500ms
$z-index-dropdown: 1000; $z-index-modal: 1300; $z-index-tooltip: 1500
```

### BEM Naming (.block\_\_element--modifier)

```scss
.video-card {
} // Block
.video-card__title {
} // Element (double underscore)
.video-card--featured {
} // Boolean modifier (double dash)
.video-card--size-large {
} // Key-value modifier
.video-card__button--primary {
} // Element with modifier

// ❌ WRONG
.videoCard {
} // camelCase
.video_card {
} // snake_case
.video-card-title {
} // missing __
```

### Component Templates

**TSX Component:**

```tsx
import type { FC } from 'react';
import './index.scss';

interface ComponentProps {
  title: string;
}

const Component: FC<ComponentProps> = ({ title }) => {
  return <div className="component">{title}</div>;
};

export default Component;
```

**Redux Slice:**

```typescript
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: number;
}

const slice = createSlice({
  name: 'feature',
  initialState: { value: 0 } as State,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = slice.actions;
export default slice.reducer;
```

**SCSS Component:**

```scss
.component {
  background: var(--bg-primary); // CSS variable (theme-able)
  color: var(--text-primary);
  padding: $spacing-lg; // SCSS variable (static)

  &__title {
    color: var(--text-secondary);
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
  }
}

@include breakpoint-up(md) {
  .component {
    padding: $spacing-md;
  }
}
```

---

## 🎯 Project-Specific Patterns

### API Calls

```typescript
import apiService from '@/services/api.service';
const data = await apiService.getVideos(filters, cursor, limit);
```

### Redux Usage

```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
const dispatch = useAppDispatch();
const { videos, loading } = useAppSelector((state) => state.homePage);
```

### Material UI

```typescript
import { Button, Box, Typography } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
```

---

## 📁 File Structure

```
src/
├── components/        # Reusable UI
│   ├── common/       # Shared across pages
│   └── home-page/    # Page-specific
├── pages/            # Page components
├── store/            # Redux
│   ├── store.ts      # Store config
│   ├── hooks.ts      # useAppDispatch, useAppSelector
│   └── [feature]/    # Feature slices
├── services/         # API (api.service.ts)
├── utils/            # Utilities (axios.ts, storage.ts)
├── types/            # Global TypeScript types
├── theme/            # design-tokens.ts, mui-theme.ts
└── scss/             # variables.scss, mixins.scss
```

---

## 🔧 Commands

```bash
npm run dev          # Start dev (auto-lints)
npm run build        # Type check + build + lint
npm run lint:fix     # Fix ESLint
npm run lint:css:fix # Fix Stylelint
npm run format       # Prettier
```

---

## 📋 Common Patterns

### Always Do

| Category    | Rule               | Example                                          |
| ----------- | ------------------ | ------------------------------------------------ |
| **Types**   | Proper interfaces  | `interface Props { title: string }`              |
| **Imports** | `@/` for cross-dir | `import { useAppDispatch } from '@/store/hooks'` |
| **Colors**  | CSS variables      | `color: var(--primary-color)`                    |
| **Spacing** | SCSS variables     | `padding: $spacing-lg`                           |
| **CSS**     | BEM + kebab-case   | `.video-card__title--large`                      |
| **Redux**   | Typed hooks        | `useAppDispatch()`, `useAppSelector()`           |

### Never Do

| What      | Why            | Alternative            |
| --------- | -------------- | ---------------------- |
| `#14b8a6` | Breaks theming | `var(--primary-color)` |
| `24px`    | Not scalable   | `$spacing-lg`          |
| `#my-id`  | Bad practice   | `.my-class`            |
| `any`     | No type safety | Proper interface       |
| `!`       | Unsafe         | Optional chaining `?.` |

---

## 📊 Pre-Flight Checklist

**Before committing:**

```
□ Colors: All var(--color-name)?
□ Spacing: All $spacing-*?
□ Classes: All BEM kebab-case?
□ Types: No 'any', '!', '@ts-ignore'?
□ Imports: '@/' for cross-directory?
□ Redux: useAppDispatch, useAppSelector?
□ Linters: npm run lint:fix && npm run lint:css:fix
```

---

## ⚠️ THIS FILE IS SINGLE SOURCE OF TRUTH

**DO NOT create new .md files.** Append changes to "Implementation Status & Change Log" section below.

---

## 📊 Implementation Status & Change Log

### ✅ Current Features (Production Ready)

**Servers Running:**

- Mock API: http://localhost:3001
- React App: http://localhost:5173

**Core Features:**

- ✅ Multi-select filters (genre, tags, platform, app package)
- ✅ Date range filter (From/To date)
- ✅ Sort by newest/oldest (instant apply)
- ✅ Infinite scroll with cursor-based pagination
- ✅ Video modal with HTML5 player
- ✅ Google OAuth 2.0 authentication
- ✅ Filter persistence via localStorage
- ✅ Responsive design (mobile-first)
- ✅ MUI theme integration
- ✅ Redux Toolkit state management
- ✅ TypeScript strict mode
- ✅ Performance optimizations (memo, useCallback, lazy loading)

**Code Quality:**

- ✅ ESLint: 0 errors
- ✅ Stylelint: 0 errors
- ✅ TypeScript: 0 errors
- ✅ All P0 rules enforced

### 🎯 Feature Checklist

| Feature              | Status | Details                             |
| -------------------- | ------ | ----------------------------------- |
| Multi-select filters | ✅     | MUI Autocomplete with freeSolo      |
| Custom filter values | ✅     | Users can type custom genres/tags   |
| Date range filter    | ✅     | From/To date pickers                |
| Sort by filter       | ✅     | Newest/Oldest dropdown              |
| Infinite scroll      | ✅     | Cursor-based pagination             |
| Video tiles          | ✅     | Thumbnail, title, genre, tags, date |
| Video modal          | ✅     | HTML5 video with controls           |
| Redux + Thunk        | ✅     | Typed hooks, separate slices        |
| Loading states       | ✅     | LoadingSpinner component            |
| Error states         | ✅     | ErrorMessage with retry             |
| Mock server          | ✅     | Express on port 3001                |
| Material-UI          | ✅     | 15+ components used                 |
| Responsive design    | ✅     | 4 breakpoints (xs, sm, md, lg)      |
| Animations           | ✅     | Hover effects, transitions          |
| Accessibility        | ✅     | Keyboard nav, ARIA, focus           |
| BEM naming           | ✅     | All CSS follows BEM                 |
| TypeScript           | ✅     | Strict mode, no any                 |
| Performance          | ✅     | memo, useCallback, lazy loading     |
| Error boundary       | ✅     | react-error-boundary                |
| Authentication       | ✅     | Google OAuth 2.0                    |
| Filter persistence   | ✅     | localStorage integration            |

### 📁 Project Architecture

```
Key Components:
- Header: Branded header with user profile and logout
- VideoFilters: Multi-select filters (genre, tags, platform, package) + date range
- VideoSort: Sort dropdown (newest/oldest)
- VideoGrid: Infinite scroll with cursor pagination
- VideoCard: Memoized tile with lazy-loaded images
- VideoModal: Memoized player with keyboard controls
- ErrorMessage: Reusable error display with retry
- LoadingSpinner: Reusable loading indicator
- LoginPage: Google OAuth sign-in
- withAuth HOC: Route protection and auth persistence

Redux Structure:
- store/auth/: Authentication state (merged auth + user)
- store/home-page/: Video list, filters, cursor state
- store/hooks.ts: Typed useAppDispatch, useAppSelector

API Endpoints:
- POST /auth/v1/google-login → { accessToken, email, name, profileUrl }
- GET /media/v1/filters → { genere[], tags[], platform[], appPackageName[] }
- GET /media/v1/video-list?cursor=X&limit=20... → { videos[], cursor, limit }
```

### 🔄 Recent Updates

**Version 8.4 (Oct 15, 2025) - Infinite Scroll:**

- ✅ Replaced "Load More" button with automatic infinite scroll
- ✅ Intersection Observer triggers fetch 100px before bottom
- ✅ Duplicate request prevention with isFetchingRef
- ✅ Shows spinner during load, end message when complete

**Version 8.3 (Oct 15, 2025) - Platform & App Package Filters:**

- ✅ Added Platform filter (android, ios, web)
- ✅ Added App Package Name filter with freeSolo
- ✅ 4-column filter layout on desktop, 2-column on mobile

**Version 8.2 (Oct 15, 2025) - Filters API Update:**

- ✅ Updated to /media/v1/filters endpoint
- ✅ Added platform and appPackageName to response
- ✅ Renamed genres → genere (matches API spec)

**Version 8.1 (Oct 15, 2025) - Video Interface Update:**

- ✅ Updated Video interface with new fields
- ✅ Changed id from number to string
- ✅ Renamed name → title, thumbnail → thumbnailUrl
- ✅ Added description, duration, appId, appPackageName, platform
- ✅ Changed genre from string to genere: string[]

**Version 8.0 (Oct 15, 2025) - Cursor-Based Pagination:**

- ✅ Migrated from page-based to cursor-based pagination
- ✅ Updated API endpoint to /media/v1/video-list
- ✅ Videos append on scroll, replace on filter change

**Version 7.0 (Oct 15, 2025) - Google OAuth Authentication:**

- ✅ Implemented Google OAuth 2.0 with @react-oauth/google
- ✅ Created LoginPage with Google Sign-In button
- ✅ Added withAuth HOC for route protection
- ✅ Merged auth state (token + user data in single slice)
- ✅ Auto-login via localStorage persistence
- ✅ Header displays user avatar and name
- ✅ Logout functionality

**Previous Updates (Oct 13, 2025):**

- ✅ Separated sort from filters for better UX
- ✅ Instant sort application (no "Apply" button)
- ✅ Set "Newest" as default sort
- ✅ Code quality audit (all P0 rules enforced)
- ✅ Performance optimizations (70-80% fewer re-renders)

### 🎨 Material-UI Theme Integration

**Single Source of Truth:** `src/theme/design-tokens.ts`

All colors defined once, auto-synced to:

- MUI theme (`mui-theme.ts` imports colors)
- CSS variables (injected at runtime in `main.tsx`)
- SCSS files (reference via `var(--color-name)`)

**Architecture:**

```
design-tokens.ts → colors object
    ↓
    ├─→ mui-theme.ts (imports directly)
    ├─→ CSS Variables (runtime injection)
    └─→ SCSS files (var(--color-name))
```

**Available Colors:**

- Brand: primary, secondary, accent
- Text: textPrimary, textSecondary, textTertiary
- Background: bgPrimary, bgSecondary, bgTertiary
- State: success, error, warning, info
- Border: borderColor, borderLight
- Gradient: gradientStart, gradientEnd

**MUI Component Customizations:**

- Button, Card, Paper, Chip: Custom radius and hover effects
- Autocomplete, TextField, Select: Teal focus color
- Dialog, Modal: Large radius and shadows
- All components styled to match design system

### 🔐 Authentication Implementation

**Flow:**

1. App mounts → withAuth HOC checks localStorage
2. Token exists → initializeAuth() → Show HomePage
3. No token → Show LoginPage
4. User clicks Google button → OAuth popup
5. Google returns idToken → POST /auth/v1/google-login
6. Store accessToken + user data → Redux + localStorage
7. App re-renders → Show Header + HomePage

**Redux State (Merged Auth):**

```typescript
state.auth: {
  accessToken: string | null,
  isLoggedIn: boolean,
  loading: boolean,
  error: string | null,
  user: { email, name, profileUrl } | null
}
```

**Why Merged?** Auth and user data always synchronized (same API).

### 🐛 Known Issues

**Issue:** Node.js version warning (20.15.0 vs 20.19+ required)  
**Impact:** None - servers run successfully  
**Solution:** Upgrade Node.js when convenient

### 💡 Future Enhancements (Optional)

- [ ] Virtual scrolling for 100+ videos (react-window)
- [ ] Image optimization with WebP format
- [ ] Code splitting for VideoModal
- [ ] Service worker for offline support
- [ ] React Query for advanced caching
- [ ] HttpOnly cookies for production security

---

**Last Updated:** Oct 16, 2025 | **Version:** 8.5 (Optimized Instructions for AI Assistants - 60% Size Reduction)
