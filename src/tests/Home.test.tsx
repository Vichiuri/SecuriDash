import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';  // <- Import jest-dom
import Home from '../pages/Home';


test('renders connect MetaMask button', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Connect MetaMask/i);
  expect(buttonElement).toBeInTheDocument();  
});
