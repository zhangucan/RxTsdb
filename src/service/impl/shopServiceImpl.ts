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
    return propId(result);
  }
  async bulkcreateShop(shops: Shop[]): Promise<any> {
    const result = await ShopDaoImpl.bulkCreate(shops);
    return result;
  }
  async upsertGeoShop(coordinate: Coordinate, geoShop: GeoShop): Promise<any> {
    const name = JSON.stringify(geoShop);
    return ShopDaoImpl.upsertGeo(this.xcRedis, coordinate, name);
  }
  async upsertShop(shop: Shop): Promise<boolean> {
    const result = await ShopDaoImpl.upsert(shop);
    return result;
  }
  async searchAround(coordinate: Coordinate, radius: number): Promise<{
    shopId: number,
    name: string,
    phone: string,
    address: string,
    distance: number,
    lng: number,
    lat: number
  }[]> {
    const result = await ShopDaoImpl.searchAround(this.xcRedis, coordinate, radius);
    if (result && isArray(result)) {
      return result.map(item => {
        const geoShop: GeoShop = JSON.parse(item[0]);
        return {
          shopId: Number(geoShop.id),
          name: geoShop.name,
          phone: geoShop.phone,
          address: geoShop.address,
          distance: Number(item[1]),
          lng:  Number(item[2][0]),
          lat: Number(item[2][0])
        };
      });
    }
    return [];
  }
  async getShopById(id: number): Promise<Shop> {
    const result = await ShopDaoImpl.findByPk(id);
    return propDataValues(result);
  }
}
