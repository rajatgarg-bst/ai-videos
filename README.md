# Hello World - Vite + React + TypeScript + Material UI + Redux

A modern React application built with Vite and TypeScript, featuring ├── .husky├── .eslintrc.config.js # ESLint configuration (strict mode with TypeScript)
├── .stylelintrc.json # Stylelint configuration (with SCSS support)
├── .prettierrc # Prettier configuration
├── .prettierignore # Prettier ignore patterns
├── .husky/ # Git hooks directory
│ └── pre-commit # Pre-commit hook script
├── vite.config.ts # Vite configuration with ESLint & Stylelint plugins
├── ESLINT_RULES.md # Detailed ESLint rules documentation
└── package.json # Dependencies and scripts

```

## ✨ Features

- 🎨 Material UI components with theme customization
- 🔄 Redux Toolkit for state management with typed hooks
- 📘 TypeScript for type safety and better DX
- 💎 SASS/SCSS for advanced styling with variables and nesting
- 📝 **Strict ESLint** with Airbnb style guide and TypeScript rules (integrated via Vite plugin)   # Git hooks directory
│   └── pre-commit           # Pre-commit hook script
├── vite.config.ts           # Vite configuration with ESLint & Stylelint plugins
└── package.json             # Dependencies and scripts
```

## ✨ Features

- 🎨 Material UI components with theme customization
- 🔄 Redux Toolkit for state management with typed hooks
- 📘 TypeScript for type safety and better DX
- 💎 SASS/SCSS for advanced styling with variables and nesting
- 📝 ESLint with Airbnb style guide and TypeScript support (integrated via Vite plugin)
- 💅 Stylelint for CSS/SCSS linting (integrated via Vite plugin)
- ✨ Prettier code formattingmponents, Redux Toolkit for state management, and configured with Airbnb ESLint and Stylelint.

## 🚀 Technologies

- **Vite** - Next generation frontend tooling
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript with path aliases (`@/`)
- **Material UI** - React component library with Material Design
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API calls with interceptors
- **React Error Boundary** - Error handling and graceful fallbacks
- **SASS/SCSS** - CSS preprocessor with variables and nesting
- **ESLint** - Code linting with Airbnb configuration
- **Stylelint** - CSS/SCSS linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📦 Installation

```bash
npm install
```

## 🔧 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🏗️ Build

Build for production (includes TypeScript compilation):

```bash
npm run build
```

Type check without building:

```bash
npm run type-check
```

Preview production build:

```bash
npm run preview
```

## 🧹 Linting & Formatting

Run ESLint:

```bash
npm run lint
```

Fix ESLint issues automatically:

```bash
npm run lint:fix
```

Run Stylelint (CSS/SCSS):

```bash
npm run lint:css
```

Fix Stylelint issues automatically:

```bash
npm run lint:css:fix
```

Format code with Prettier:

```bash
npm run format
```

Check code formatting:

```bash
npm run format:check
```

## 🪝 Git Hooks

This project uses **Husky** and **lint-staged** to automatically run linting and formatting before each commit.

### Pre-commit Hook

When you commit, the following will automatically run on staged files:

- ESLint with auto-fix for `.js` and `.jsx` files
- Stylelint with auto-fix for `.css` files
- Prettier formatting for all supported files

### Linting on Build

ESLint and Stylelint are integrated into Vite via plugins and run automatically during development and build:

- **Development** (`npm run dev`) - Linting runs in watch mode, showing errors in the console and browser
- **Production** (`npm run build`) - TypeScript compilation and linting run before build, failing if errors are found

This is configured in `vite.config.ts` using `vite-plugin-eslint` and `vite-plugin-stylelint`.

## 📁 Project Structure

```
videos/
├── src/
│   ├── store/
│   │   ├── store.ts         # Redux store configuration
│   │   ├── helloSlice.ts    # Redux slice for hello message
│   │   └── hooks.ts         # Typed Redux hooks
│   ├── components/
│   │   ├── ErrorFallback.tsx # Error boundary fallback component
│   │   └── ErrorFallback.scss # Error fallback styles
│   ├── services/
│   │   └── api.service.ts   # API service with Axios
│   ├── utils/
│   │   └── axios.ts         # Axios instance configuration
│   ├── App.tsx              # Main App component with Material UI
│   ├── App.scss             # App styles (SASS)
│   ├── main.tsx             # Entry point with Redux Provider & Error Boundary
│   ├── index.scss           # Global styles (SASS)
│   └── vite-env.d.ts        # Vite type definitions
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node-specific TypeScript config
├── eslint.config.js         # ESLint configuration (strict mode with TypeScript)
├── .stylelintrc.json        # Stylelint configuration (strict mode with SCSS)
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore patterns
├── .env.example             # Environment variables template
├── .husky/                  # Git hooks directory
│   └── pre-commit           # Pre-commit hook script
├── vite.config.ts           # Vite configuration with ESLint & Stylelint plugins
├── ESLINT_RULES.md          # Detailed ESLint rules documentation
├── STYLELINT_RULES.md       # Detailed Stylelint rules documentation
├── AXIOS_ERROR_BOUNDARY_SETUP.md # Axios & Error Boundary guide
└── package.json             # Dependencies and scripts
```

## 📚 Documentation

- **[AXIOS_ERROR_BOUNDARY_SETUP.md](./AXIOS_ERROR_BOUNDARY_SETUP.md)** - Complete guide for Axios and Error Boundary
  - Axios configuration and usage examples
  - API service patterns
  - Error boundary setup and customization
  - TypeScript types and best practices

- **[PROJECT_SETUP.md](./PROJECT_SETUP.md)** - Complete project setup and configuration overview
  - All dependencies and versions
  - Configuration files explained
  - Development workflow
  - Quality metrics and current status
  - Common issues and solutions

- **[PATH_ALIASES.md](./PATH_ALIASES.md)** - Path aliases configuration and usage guide
  - `@/` alias for clean imports
  - Usage examples and best practices
  - Configuration for TypeScript, Vite, and ESLint
  - IDE setup instructions

- **[ESLINT_RULES.md](./ESLINT_RULES.md)** - Comprehensive guide to the strict ESLint configuration
  - 60+ strict rules for JavaScript and TypeScript
  - TypeScript-specific rules (no-explicit-any, consistent-type-imports, etc.)
  - React hooks and best practices
  - Import ordering and organization
  - Examples and common violations

- **[STYLELINT_RULES.md](./STYLELINT_RULES.md)** - Comprehensive guide to the strict Stylelint configuration
  - 50+ strict rules for CSS and SCSS
  - Alphabetical property ordering
  - Naming conventions (kebab-case)
  - No ID selectors (max specificity control)
  - SCSS best practices (variables, mixins, functions)
  - BEM methodology examples

- **[.github/copilot-instructions.md](./.github/copilot-instructions.md)** - AI assistant instructions and project guidelines
  - All design tokens, spacing, typography rules
  - P0/P1/P2 priority rules
  - Google OAuth 2.0 authentication implementation
  - Redux state management patterns
  - Code quality checklist and workflows

## 🎯 Code Quality Features

This project enforces **extremely strict** code quality standards:

- ✅ **TypeScript Strict Mode** - No implicit any, strict null checks
- ✅ **ESLint Strict Rules** - 60+ rules including TypeScript-specific checks
- ✅ **Stylelint Strict Rules** - 50+ rules including SCSS patterns
- ✅ **Alphabetical Property Ordering** - All CSS properties alphabetically sorted
- ✅ **No ID Selectors** - Enforces class-based styling
- ✅ **Naming Conventions** - kebab-case for classes, variables, mixins
- ✅ **Import Ordering** - Consistent import organization
- ✅ **No Vendor Prefixes** - Use autoprefixer instead
- ✅ **Max Nesting Depth** - Prevents overly specific selectors

## 📄 License

MIT

## ✨ Features

- 🎨 Material UI components with theme customization
- 🔄 Redux Toolkit for state management
- � SASS/SCSS for advanced styling with variables and nesting
- �📝 ESLint with Airbnb style guide (integrated via Vite plugin)
- 💅 Stylelint for CSS/SCSS linting (integrated via Vite plugin)
- ✨ Prettier code formatting
- 🪝 Pre-commit hooks with Husky and lint-staged
- ⚡ Fast refresh with Vite
- 🎯 Hello World example with interactive message change

## 📄 License

MIT

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ai-videos
