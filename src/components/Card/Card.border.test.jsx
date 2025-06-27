import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';

describe('Card Component - Border Logic', () => {
  // Common props used in tests
  const defaultProps = {
    image: "https://example.com/test-image.jpg",
    title: "Test Card Title",
    text: ["This is test paragraph text"],
    button: "Click Me",
    onClick: vi.fn()
  };

  it('Test 1: should apply blue border when isActive is true', () => {
    // ARRANGE: Set up component with isActive = true
    render(
      <Card
        {...defaultProps}
        isActive={true}
      />
    );
    
    // ACT: Get the card element
    const cardElement = screen.getByTestId('card');
    
    // ASSERT: Should have blue border classes when active
    expect(cardElement).toHaveClass('border-blue-600');
    expect(cardElement).toHaveClass('border-4');
    expect(cardElement).not.toHaveClass('border-gray-200');
    
    // Additional assertion to check the full className contains the border styles
    expect(cardElement.className).toContain('border-blue-600');
    expect(cardElement.className).toContain('border-4');
  });

  it('Test 2: should apply gray border when isActive is false', () => {
    // ARRANGE: Set up component with isActive = false
    render(
      <Card
        {...defaultProps}
        isActive={false}
      />
    );
    
    // ACT: Get the card element
    const cardElement = screen.getByTestId('card');
    
    // ASSERT: Should have gray border when inactive
    expect(cardElement).toHaveClass('border-gray-200');
    expect(cardElement).not.toHaveClass('border-blue-600');
    expect(cardElement).not.toHaveClass('border-4');
    
    // Additional assertion to verify the gray border
    expect(cardElement.className).toContain('border-gray-200');
    expect(cardElement.className).not.toContain('border-blue-600');
  });
});
