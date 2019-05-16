import { Sequelize } from 'sequelize';
import { propDataValues } from '../../util';
import { UserService } from '../userService';
import { UserDaoImpl } from '../../dao/impl/userDaoImpl';
import { User } from '../../model/user.model';
export class UsersServiceImpl implements UserService {
  constructor(sequelize: Sequelize) {
    UserDaoImpl.initModel(sequelize);
  }
  async createUser(user: User): Promise<any> {
    const [result, isCreate] = await UserDaoImpl.findOrCreate({
      where: {
        objectId: user.objectId,
        phone: user.phone
      },
      defaults: user
    });
    return {
      isCreate,
      result: propDataValues(result)
    };
  }
}
