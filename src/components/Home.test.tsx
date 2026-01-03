import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

// Mock fetch
global.fetch = vi.fn();

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (global.fetch as any).mockResolvedValue({
      json: async () => ({ posts: [] }),
    });
  });

  it('renders the profile section', () => {
    render(<Home />);
    
    expect(screen.getByText('Quinn Colello')).toBeInTheDocument();
  });

  it('displays education information', () => {
    render(<Home />);
    
    expect(screen.getByText('B.A. in Computer Science')).toBeInTheDocument();
    expect(screen.getByText('B.A. in Applied Mathematics')).toBeInTheDocument();
  });

  it('displays location information', () => {
    render(<Home />);
    
    expect(screen.getByText('Berkeley, CA - Carlsbad, CA')).toBeInTheDocument();
  });

  it('displays email address', () => {
    render(<Home />);
    
    expect(screen.getByText('quinncolello1@gmail.com')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Home />);
    
    const linkedInLink = screen.getByText('LinkedIn').closest('a');
    const githubLink = screen.getByText('GitHub').closest('a');
    
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/quinncolello/');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/joebangles');
  });

  it('renders the About Me section', () => {
    render(<Home />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/Undergraduate studying Computer Science/)).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    render(<Home />);
    
    const image = screen.getByAltText('profile picture');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('id', 'me-photo');
  });

  it('makes API call to fetch blog posts', () => {
    render(<Home />);
    
    expect(global.fetch).toHaveBeenCalledWith(
      'https://www.ocf.berkeley.edu/~qcolello/blog_api/run.fcgi/posts/?limit=1'
    );
  });
});
