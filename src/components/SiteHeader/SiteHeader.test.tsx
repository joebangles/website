import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import SiteHeader from './SiteHeader';

describe('SiteHeader', () => {
  it('renders the site title', () => {
    render(
      <BrowserRouter>
        <SiteHeader />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Quinn Colello')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <SiteHeader />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Learning')).toBeInTheDocument();
    expect(screen.getByText('CV')).toBeInTheDocument();
  });

  it('CV link opens in new tab', () => {
    render(
      <BrowserRouter>
        <SiteHeader />
      </BrowserRouter>
    );
    
    const cvLink = screen.getByText('CV').closest('a');
    expect(cvLink).toHaveAttribute('target', '_blank');
    expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
