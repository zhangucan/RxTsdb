import { Sequelize } from 'sequelize';
import { ShopService } from '../shopService';
import { Shop } from '../../model/shop.model';
import { ShopDaoImpl } from '../../dao/impl/shopDaoImpl';
import { propDataValues } from '../../util';
export class ShopServiceImpl implements ShopService {
  constructor(sequelize: Sequelize) {
    ShopDaoImpl.initModel(sequelize);
  }

  async createShop(shop: Shop): Promise<Shop> {
    const result = ShopDaoImpl.create(shop);
    return propDataValues(result);
  }
}
