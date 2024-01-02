import axios, { AxiosResponse } from 'axios';
import Api from '../../src/services/Api';

jest.mock('axios');

const TEST_URL = 'api/test-data';

describe('Api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockedData = { id: 1, name: 'User1', username: 'Username1', email: 'user1@example.com', phone: '123-456-7890', website: 'www.user1.com', address: { street: 'Street1', suite: 'Suite1', city: 'City1', zipcode: 'Zipcode1' }, company: { name: 'Company1', catchPhrase: 'CatchPhrase1', bs: 'BS1' } };

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockedData } as AxiosResponse);

    const result = await Api.get(TEST_URL);

    expect(result).toEqual(mockedData);
    expect(axios.get).toHaveBeenCalledWith(TEST_URL, {});
  });

  it('should handle errors during fetch', async () => {
    const errorMessage = 'Network Error';

    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    await expect(Api.get(TEST_URL)).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(TEST_URL, {});
  });

  it('should handle empty response from the API', async () => {
    const mockedData = {};

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockedData } as AxiosResponse);

    const result = await Api.get(TEST_URL);

    expect(result).toEqual(mockedData);
    expect(axios.get).toHaveBeenCalledWith(TEST_URL, {});
  });

  it('should handle unexpected API response structure', async () => {
    const mockedData = { invalidKey: 'Invalid Data' };
    const unknownMockedData = mockedData as unknown;

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: unknownMockedData } as AxiosResponse);

    const result = await Api.get(TEST_URL);

    expect(result).toEqual({ invalidKey: 'Invalid Data' });
    expect(axios.get).toHaveBeenCalledWith(TEST_URL, {});
  });
});
