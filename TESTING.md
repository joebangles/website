# Testing Guide

This project uses [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/react) for testing.

## Running Tests

```bash
# Run tests once
npm test -- --run

# Run tests in watch mode (re-runs on file changes)
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Writing Tests

Test files should be placed alongside the components they test with the `.test.tsx` extension.

Example structure:
```
src/
  components/
    MyComponent.tsx
    MyComponent.test.tsx
```

### Basic Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

### Testing Components with React Router

Wrap components that use `Link` or routing in `BrowserRouter`:

```typescript
import { BrowserRouter } from 'react-router';

render(
  <BrowserRouter>
    <MyComponent />
  </BrowserRouter>
);
```

### Mocking API Calls

Use Vitest's mocking capabilities:

```typescript
import { vi, beforeEach } from 'vitest';

global.fetch = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  (global.fetch as any).mockResolvedValue({
    json: async () => ({ data: [] }),
  });
});
```

## Test Coverage

Current test coverage includes:
- ✅ SiteHeader component (navigation, links)
- ✅ BlogPost component (rendering, content)
- ✅ Home component (profile info, API calls)

## Best Practices

1. **Test behavior, not implementation** - Focus on what the user sees and interacts with
2. **Use semantic queries** - Prefer `getByRole`, `getByLabelText`, `getByText` over test IDs
3. **Keep tests simple and focused** - One assertion per test when possible
4. **Mock external dependencies** - APIs, third-party libraries, etc.
5. **Use descriptive test names** - Clearly state what is being tested

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
