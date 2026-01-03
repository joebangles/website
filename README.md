# Quinn Colello's Personal Website

A personal website built with Vite + React + TypeScript to showcase projects, blog posts, and professional information.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Testing
```bash
# Run tests once
npm test -- --run

# Run tests in watch mode
npm test

# Run tests with coverage
npm run test:coverage
```

See [TESTING.md](./TESTING.md) for detailed testing documentation.

## Project Structure

```
src/
├── components/       # React components
│   ├── Home.tsx
│   ├── SiteHeader.tsx
│   ├── BlogPost.tsx
│   └── *.test.tsx   # Component tests
├── assets/          # Images and static assets
├── test/            # Test setup and utilities
└── main.tsx         # Application entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Development Workflow

This project uses a two-branch workflow with automatic deployment:

- **`dev`** - Active development branch (push changes here)
- **`main`** - Production branch (automatically deploys on merge)

### Quick Start
```bash
# Work on dev branch
git checkout dev
# ... make changes ...
git push origin dev

# Deploy to production: Create PR from dev → main on GitHub
```

See [WORKFLOW.md](./WORKFLOW.md) for complete workflow documentation including:
- Branch strategy
- Deployment process
- First-time setup instructions
- GitHub secrets configuration
- Troubleshooting tips