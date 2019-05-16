import { Sequelize } from 'sequelize';
import { ShopService } from '../shopService';
import { Shop, Coordinate, GeoShop } from '../../model/shop.model';
import { ShopDaoImpl } from '../../dao/impl/shopDaoImpl';
import { propId, propDataValues } from '../../util';
import { Redis } from 'ioredis';
import { isArray } from 'util';
export class ShopServiceImpl implements ShopService {
  xcRedis: Redis;
  constructor(sequelize: Sequelize, xcRedis: Redis) {
    ShopDaoImpl.initModel(sequelize);
    this.xcRedis = xcRedis;
  }
  async createShop(shop: Shop): Promise<number> {
    const result = await ShopDaoImpl.create(shop);
    const shopId = propId(result);
    shop.id = shopId;
    await ShopDaoImpl.upsert2Redis(this.xcRedis, shop);
    return shopId;
  }
  async bulkcreateShop(shops: Shop[]): Promise<any> {
    const result = await ShopDaoImpl.bulkCreate(shops);
    return result;
  }
  async upsertGeoShop(coordinate: Coordinate, shopId: number | string): Promise<any> {
    return ShopDaoImpl.upsertGeo(this.xcRedis, coordinate, `${shopId}`);
  }
  async upsertShop(shop: Shop): Promise<boolean> {
    const result = await ShopDaoImpl.upsert(shop);
    return result;
  }
  async searchAround(coordinate: Coordinate, radius: number, agentId: number): Promise<{
    shopId: number,
    name: string,
    phone: string,
    address: string,
    distance: number,
    lng: number,
    lat: number
  }[]> {
    const result = await ShopDaoImpl.searchAround(this.xcRedis, coordinate, radius);
    console.log('#', result);
    const data = [];
    if (result && isArray(result)) {
      for (let item of result) {
        const shopId = Number(item[0]);
        const shop =  await ShopDaoImpl.getShopInfoById(this.xcRedis, shopId, agentId);
        data.push({
          shopId,
          name: shop.name,
          phone: shop.phone,
          address: shop.address,
          distance: Number(item[1]),
          lng:  Number(item[2][0]),
          lat: Number(item[2][0])
        });
      }
    }
    return data;
  }
  async getShopById(id: number): Promise<Shop> {
    const result = await ShopDaoImpl.findByPk(id);
    return propDataValues(result);
  }
}
