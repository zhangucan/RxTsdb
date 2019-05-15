import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
import { ShopDao } from '../shopDao';
import { ShopModel } from '../../model/shop.model';
export class ShopDaoImpl extends Model implements ShopDao  {
  static async initModel(sequelize: Sequelize ) {
    this.init(ShopModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_shop',
      sequelize
    });
    this.sync();
  }
}