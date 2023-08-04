
import React from 'react';
import { render, screen } from '@testing-library/react';
import Directors from '../components/Directors';

test('renders "Directors Page" inside of a <h1 />', () => {
  render(<Directors />);
  expect(screen.getByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders each director\'s name', () => {
  
  const directorsData = [
    { name: 'Director 1', movies: ['Movie A', 'Movie B'] },
    { name: 'Director 2', movies: ['Movie C'] },
    
  ];

  render(<Directors />);
  for (const director of directorsData) {
    expect(screen.getByText(director.name, { exact: false })).toBeInTheDocument();
  }
});

test('renders a <li /> for each movie', () => {
  
  const directorsData = [
    { name: 'Director 1', movies: ['Movie A', 'Movie B'] },
    { name: 'Director 2', movies: ['Movie C'] },
    
  ];

  render(<Directors />);
  for (const director of directorsData) {
    for (const movie of director.movies) {
      expect(screen.getByText(movie, { exact: false })).toBeInTheDocument();
    }
  }
});
