import React from 'react';
import { render } from '@testing-library/react';
import Actors from '../components/Actors';

test('renders Actors component without errors', () => {
  render(<Actors />);
});
