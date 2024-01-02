import Api from './Api';
import { User } from '../types/Users';

class UserService {
  static async fetchUsers(): Promise<User[]> {
    try {
      return await Api.get<User[]>('https://jsonplaceholder.typicode.com/users');
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
