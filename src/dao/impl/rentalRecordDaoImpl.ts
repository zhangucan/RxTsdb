import { UserDao } from '../userDao';
import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { UserModel } from '../../model/user.model';
import { RentalRecord } from '../rentalRecord';
import { RentalRecordModel } from '../../model/rentalRecord.model';

export class RentalRecordDaoImpl extends Model implements RentalRecord {
  static async initModel(sequelize: Sequelize) {
    this.init(RentalRecordModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_rent_record',
      sequelize
    });
    this.sync();
  }
}