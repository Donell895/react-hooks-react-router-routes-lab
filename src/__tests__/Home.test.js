

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders "Home Page" inside of a <h1>', () => {
  render(<Home />);
  const h1 = screen.getByText(/Home Page/i);
  expect(h1)();
  expect(h1.tagName).toBe('H1');
});

