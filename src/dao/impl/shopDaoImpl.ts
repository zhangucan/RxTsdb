import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { ShopDao } from '../shopDao';
import { ShopModel, Coordinate } from '../../model/shop.model';
import { geoAdd, geoRadius } from '../../util/geoRedis';
import { Redis } from 'ioredis';

export class ShopDaoImpl extends Model implements ShopDao  {
  static async searchAround(xcredis: Redis, coordinate: Coordinate, radius: number) {
    const {lat, lng} = coordinate;
    await geoRadius(xcredis, 'xc_led_geo_shop', lat, lng, radius);
  }
  static async upsertGeo(xcredis: Redis, coordinate: Coordinate, name: string) {
    const {lat, lng} = coordinate;
    await geoAdd(xcredis, 'xc_led_geo_shop', lat, lng, name);
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