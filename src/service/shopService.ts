import { Shop, Coordinate, GeoShop } from '../model/shop.model';

export interface ShopService {
  createShop(shop: Shop): Promise<number>;
  bulkcreateShop(shops: Shop[]): Promise<any>;
  upsertGeoShop(coordinate: Coordinate, shopId: number | string): Promise<boolean>;
  upsertShop(shop: Shop): Promise<any>;
  searchAround(coordinate: Coordinate, radius: number, agentId: number): Promise<any>;
  getShopById(id: number): Promise<Shop>;
}