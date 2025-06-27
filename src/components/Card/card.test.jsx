import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card Component', () => {
  it('applies blue border when isActive is true', () => {
    render(
      <Card
        image="https://example.com/image.jpg"
        title="Test Title"
        text={['Paragraph']}
        button="Click"
        isActive={true}
        onClick={() => {}}
      />
    );
    const cardElement = screen.getByTestId('card');
    expect(cardElement.className).toContain('border-blue-600');
  });
});
