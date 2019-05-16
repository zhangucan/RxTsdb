import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { ShopDao } from '../shopDao';
import { ShopModel, Coordinate, Shop } from '../../model/shop.model';
import { geoAdd, geoRadius } from '../../util/geoRedis';
import { Redis } from 'ioredis';

export class ShopDaoImpl extends Model implements ShopDao  {
  static async searchAround(xcredis: Redis, coordinate: Coordinate, radius: number) {
    const {lat, lng} = coordinate;
    return await geoRadius(xcredis, `xc_led_geo_shop`, lng, lat, radius);
  }
  static async upsert2Redis(xcredis: Redis, shop: Shop) {
    return await xcredis.hmset(`xc_led_shop_info_${shop.id}`, shop);
  }
  static async getShopInfoById(xcredis: Redis, shopId: number): Promise<any> {
    return await xcredis.hgetall(`xc_led_shop_info_${shopId}`);
  }
  static async upsertGeo(xcredis: Redis, coordinate: Coordinate, name: string) {
    const {lat, lng} = coordinate;
    return await geoAdd(xcredis, `xc_led_geo_shop`, lng, lat, name);
  }
  static async getAllShop(agentId: number): Promise<any[]> {
    const query = agentId ? {
      agentId
    } : {};
    const result = ShopDaoImpl.findAll({
      where: query
    });
    return result;
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