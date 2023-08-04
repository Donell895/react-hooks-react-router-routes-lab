import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('wraps content in a div with "navbar" class', () => {
  render(<NavBar />);
  expect(screen.getByTestId('navbar-container'))();
});

test('renders a Home <NavLink>', () => {
  render(<NavBar />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders a Movies <NavLink>', () => {
  render(<NavBar />);
  expect(screen.getByText('Movies')).toBeInTheDocument();
});

test('renders a Actors <NavLink>', () => {
  render(<NavBar />);
  expect(screen.getByText('Actors')).toBeInTheDocument();
});

test('renders a Directors <NavLink>', () => {
  render(<NavBar />);
  expect(screen.getByText('Directors')).toBeInTheDocument();
});
