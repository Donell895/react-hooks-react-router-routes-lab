import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from '../components/Movies';
import { moviesData } from '../data'; 

test('renders "Movies Page" inside of a <h1 />', () => {
  render(<Movies />);
  expect(screen.getByText(/Movies Page/g)).toBeInTheDocument();
});

test('renders each movie\'s title and time', () => {
  render(<Movies />);
  for (const movie of moviesData) {
    expect(screen.getByText(movie.title, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(movie.time.toString(), { exact: false })).toBeInTheDocument();
  }
});

test('renders a <li /> for each genre', () => {
  render(<Movies />);
  for (const movie of moviesData) {
    for (const genre of movie.genres) {
      expect(screen.getByText(genre, { exact: false })).toBeInTheDocument();
    }
  }
});
