import { EbikeService } from '../ebikeService';
import { EbikeBingingRelDaoImpl, DeviceDaoImpl, CarDaoImpl } from '../../dao/impl/ebikeDaoImpl';
import { UserDaoImpl } from '../../dao/impl/userDaoImpl';
import { ShopDaoImpl } from '../../dao/impl/shopDaoImpl';
import { Sequelize } from 'sequelize';
import { EbikeBingingRel } from '../../model/ebike.model';

export class EbikeServiceImpl implements EbikeService {
  constructor(sequelize: Sequelize) {
    EbikeBingingRelDaoImpl.initModel(sequelize);
  }
  async getEBikeBindingRel(objectId: string): Promise<any> {
    // EbikeBingingRelDaoImpl.belongsTo(UserDaoImpl, {
    //   foreignKey: 'userId',
    // });
    // EbikeBingingRelDaoImpl.belongsTo(DeviceDaoImpl, {
    //   foreignKey: 'deviceId',
    // });
    // EbikeBingingRelDaoImpl.belongsTo(CarDaoImpl, {
    //   foreignKey: 'carId',
    // });
    // EbikeBingingRelDaoImpl.belongsTo(ShopDaoImpl, {
    //   foreignKey: 'shopId',
    // });
    // await EbikeBingingRelDaoImpl.sync();
    const result: EbikeBingingRel = EbikeBingingRelDaoImpl.findOne({
      rejectOnEmpty: true,
      where: {
        objectId
      }
    });

    return result;
  }
}