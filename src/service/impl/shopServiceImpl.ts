import { Sequelize } from 'sequelize';
import { ShopService } from '../shopService';
import { Shop, Coordinate } from '../../model/shop.model';
import { ShopDaoImpl } from '../../dao/impl/shopDaoImpl';
import { propId } from '../../util';
import { Redis } from 'ioredis';
export class ShopServiceImpl implements ShopService {
  xcRedis: Redis;
  constructor(sequelize: Sequelize, xcRedis: Redis) {
    ShopDaoImpl.initModel(sequelize);
    this.xcRedis = xcRedis;
  }
  async createShop(shop: Shop): Promise<Shop> {
    const result = await ShopDaoImpl.create(shop);
    return propId(result);
  }
  async bulkcreateShop(shops: Shop[]): Promise<any> {
    const result = await ShopDaoImpl.bulkCreate(shops);
    return result;
  }
  async upsertGeoShop(coordinate: Coordinate, name: string): Promise<any> {
   return ShopDaoImpl.upsertGeo(this.xcRedis, coordinate, name);
  }
  async upsertShop(shop: Shop) {
    const result = await ShopDaoImpl.upsert(shop);
    return result;
  }
  async searchAround(coordinate: Coordinate, radius: number): Promise<any> {
    const result = await ShopDaoImpl.searchAround(this.xcRedis, coordinate, radius);
    return result;
  }
  async getShopById(id: number): Promise<any> {
    const result = await ShopDaoImpl.findByPk(id);
    return result;
  }
}
