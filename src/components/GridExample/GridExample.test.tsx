
import { render, screen } from '@testing-library/react';
import { GridExample } from './GridExample'; 

describe('GridExample Component', () => {
  it('renders the grid without crashing', () => {
    render(<GridExample />);
    expect(screen.getByRole('treegrid')).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    render(<GridExample />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4); // 3 data rows + 1 header row
  });

  it('renders the correct column headers', () => {
    render(<GridExample />);
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });
});
