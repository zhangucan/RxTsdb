import { UserDao } from '../userDao';
import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { UserModel } from '../../model/user.model';

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