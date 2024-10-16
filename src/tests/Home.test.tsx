import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders connect button', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Connect MetaMask/i);
  expect(buttonElement).toBeInTheDocument();
});
