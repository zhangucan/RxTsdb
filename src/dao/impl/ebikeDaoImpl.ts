import { Model, Sequelize } from 'sequelize';
import { CarDao, DeviceDao, EbikeBingingRelDao } from '../ebikeDao';
import { CarModel, EbikeBingingRelModel, DeviceModel } from '../../model/ebike.model';
import { CREATE_RULE } from '../../config';
import { Redis } from 'ioredis';

export class CarDaoImpl extends Model implements CarDao {
  static async initModel(sequelize: Sequelize) {
    this.init(CarModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_carInfo',
      sequelize
    });
    this.sync();
  }
}


export class DeviceDaoImpl extends Model implements DeviceDao {
  static async initModel(sequelize: Sequelize) {
    this.init(DeviceModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_deviceInfo',
      sequelize
    });
    this.sync();
  }
}


export class EbikeBingingRelDaoImpl extends Model implements EbikeBingingRelDao {
  static async initModel(sequelize: Sequelize) {
    this.init(EbikeBingingRelModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_ebike_bingdingInfo',
      sequelize
    });
    this.sync();
  }
  static async getDeviceInfo(xcredis: Redis, imei: string) {
    return await xcredis.hgetall(`xc_xiaoan_device_info_${imei}`);
  }
}