import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  const mockProps = {
    image: 'https://example.com/image.jpg',
    title: 'Test Title',
    text: 'Paragraph 1',
    button: 'Click Me',
    isActive: false,
    onClick: () => {},
  };

  it('renders the card title', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders all paragraphs in the card', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });

  it('renders the button with correct label', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders the image with alt text', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
  });
});
