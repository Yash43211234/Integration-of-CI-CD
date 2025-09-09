import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo list heading', () => {
  render(<App />);
  const heading = screen.getByText(/Todo list/i);
  expect(heading).toBeInTheDocument();
});
