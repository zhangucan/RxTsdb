import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { ShopDao } from '../shopDao';
import { ShopModel, Coordinate } from '../../model/shop.model';
import { geoAdd, geoRadius } from '../../util/geoRedis';
import { Redis } from 'ioredis';

export class ShopDaoImpl extends Model implements ShopDao  {
  static async searchAround(xcredis: Redis, coordinate: Coordinate, radius: number) {
    const {lat, lng} = coordinate;
    return await geoRadius(xcredis, `geo_shop`, lng, lat, radius);
  }
  static async upsertGeo(xcredis: Redis, coordinate: Coordinate, name: string) {
    const {lat, lng} = coordinate;
    return await geoAdd(xcredis, `geo_shop`, lng, lat, name);
  }
  static async initModel(sequelize: Sequelize) {
    this.init(ShopModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_shop',
      sequelize
    });
    this.sync();
  }
}