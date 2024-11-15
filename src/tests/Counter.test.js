import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText('0');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const plusButton = screen.getByText('+');
  const count = screen.getByText('0');

  // Checks if it increments from 0 to 1
  fireEvent.click(plusButton);
  expect(count).toHaveTextContent('1');

  // Checks if it increments from 1 to 2
  fireEvent.click(plusButton);
  expect(count).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  const minusButton = screen.getByText('-');
  const count = screen.getByText('0');

  // Checks if it increments from 0 to 1
  fireEvent.click(minusButton);
  expect(count).toHaveTextContent('-1');

  // Checks if it increments from 1 to 2
  fireEvent.click(minusButton);
  expect(count).toHaveTextContent('-2');
});