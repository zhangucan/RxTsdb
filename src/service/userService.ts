import { User } from '../model/user.model';

export interface UserService {
  createUser(user: User): Promise<number>;
}