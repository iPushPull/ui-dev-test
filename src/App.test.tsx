import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from './../TestUtils';

describe('App', () => {
  it('renders correctly with the right heading', () => {
    renderWithRouter(<App />);
    const headingElement = screen.getByText(/example grid/i);
    expect(headingElement).toBeInTheDocument();
  });
});
