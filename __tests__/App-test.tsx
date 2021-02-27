/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import { render } from '@testing-library/react-native';

it('renders without crashing', () => {
  const target = render(<App />);

  expect(() => {
        target.unmount();
      }).not.toThrow();
});
