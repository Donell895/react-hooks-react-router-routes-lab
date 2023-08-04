
import React from 'react';
import { MemoryRouter } from 'react-router-dom'; 
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the <NavBar /> component', () => {
  render(
    <MemoryRouter> {}
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('navbar-container')).toBeInTheDocument();
});


