import { render, screen, waitFor } from '@testing-library/react';
import { GridExample } from '../GridExample/GridExample';

jest.mock('../../services/UserService', () => ({
  fetchUsers: jest.fn(() => Promise.resolve([
    { id: 1, name: 'User1', username: 'Username1', email: 'user1@example.com', phone: '123-456-7890', website: 'www.user1.com', address: { street: 'Street1', suite: 'Suite1', city: 'City1', zipcode: 'Zipcode1' }, company: { name: 'Company1', catchPhrase: 'CatchPhrase1', bs: 'BS1' } },
    { id: 2, name: 'User2', username: 'Username2', email: 'user2@example.com', phone: '987-654-3210', website: 'www.user2.com', address: { street: 'Street2', suite: 'Suite2', city: 'City2', zipcode: 'Zipcode2' }, company: { name: 'Company2', catchPhrase: 'CatchPhrase2', bs: 'BS2' } },
    { id: 3, name: 'User3', username: 'Username3', email: 'user3@example.com', phone: '555-123-4567', website: 'www.user3.com', address: { street: 'Street3', suite: 'Suite3', city: 'City3', zipcode: 'Zipcode3' }, company: { name: 'Company3', catchPhrase: 'CatchPhrase3', bs: 'BS3' } },
  ])),
}));

describe('GridExample Component', () => {
  it('renders the grid without crashing', async () => {
    render(<GridExample />);
    await waitFor(() => {
      expect(screen.getByTestId('grid')).toBeInTheDocument();
    });
  });

  it('fetches and renders the correct number of rows', async () => {
    render(<GridExample />);
    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(4); //3 rows  + 1 headers  
    });
  });

  it('fetches and renders the correct column headers', async () => {
    render(<GridExample />);
    await waitFor(() => {
      const columnHeaders = ['Name', 'Username', 'Email', 'Phone', 'Website', 'Address', 'Company Name'];

      columnHeaders.forEach((header) => {
        expect(screen.getByRole('columnheader', { name: header })).toBeInTheDocument();
      });

      expect(screen.queryByRole('columnheader', { name: 'ID' })).not.toBeInTheDocument();
    });
  });  

  it('fetches and renders user data in the grid cells', async () => {
    render(<GridExample />);
    await waitFor(() => {
      const userData = [
        { name: 'User1', username: 'Username1', email: 'user1@example.com', phone: '123-456-7890', website: 'www.user1.com', address: 'Street1, Suite1, City1, Zipcode1', company: 'Company1' },
        { name: 'User2', username: 'Username2', email: 'user2@example.com', phone: '987-654-3210', website: 'www.user2.com', address: 'Street2, Suite2, City2, Zipcode2', company: 'Company2' },
        { name: 'User3', username: 'Username3', email: 'user3@example.com', phone: '555-123-4567', website: 'www.user3.com', address: 'Street3, Suite3, City3, Zipcode3', company: 'Company3' },
      ];
  
      userData.forEach((user) => {
        Object.values(user).forEach((value) => {
          expect(screen.getByText(value)).toBeInTheDocument();
        });
      });
    });
  });
})
