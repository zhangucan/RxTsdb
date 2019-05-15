import { Shop } from '../model/shop.model';

export interface ShopService {
  createShop(shop: Shop): Promise<Shop> ;
}