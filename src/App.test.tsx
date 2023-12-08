import { render, screen } from '@testing-library/react';
import App from './App'; 

describe('App', () => {
  it('renders correctly with the right heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/example grid/i);    
    expect(headingElement).toBeInTheDocument();
  });
});
