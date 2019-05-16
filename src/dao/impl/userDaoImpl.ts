import { UserDao } from '../userDao';
import { Model, Sequelize } from 'sequelize/types';
import { UserModel } from '../../../lib/model/user.model';
import { CREATE_RULE } from '../../config';

export class UserDaoImpl extends Model implements UserDao {
  static async initModel(sequelize: Sequelize) {
    this.init(UserModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_user',
      sequelize
    });
    this.sync();
  }
}