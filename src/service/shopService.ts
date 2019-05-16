import { Shop, Coordinate } from '../model/shop.model';

export interface ShopService {
  createShop(shop: Shop): Promise<any>;
  bulkcreateShop(shops: Shop[]): Promise<any>;
  upsertGeoShop(coordinate: Coordinate, name: string): Promise<any>;
  upsertShop(shop: Shop): Promise<any>;
  searchAround(coordinate: Coordinate, radius: number): Promise<any>;
  getShopById(id: number): Promise<any>;
}