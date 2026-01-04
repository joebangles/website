import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlogPost from './BlogPost';

describe('BlogPost', () => {
  it('renders the blog post container', () => {
    render(<BlogPost />);
    
    const container = screen.getByText('This is the title of this post').closest('.post-container');
    expect(container).toBeInTheDocument();
  });

  it('displays the post title', () => {
    render(<BlogPost />);
    
    expect(screen.getByText('This is the title of this post')).toBeInTheDocument();
  });

  it('displays the post date', () => {
    render(<BlogPost />);
    
    expect(screen.getByText('2026-01-01')).toBeInTheDocument();
  });

  it('displays the post content preview', () => {
    render(<BlogPost />);
    
    expect(screen.getByText(/This is the content of the post/)).toBeInTheDocument();
  });

  it('has proper structure with header and content', () => {
    render(<BlogPost />);
    
    const postHeader = screen.getByText('This is the title of this post').closest('.post-header');
    expect(postHeader).toBeInTheDocument();
  });
});
