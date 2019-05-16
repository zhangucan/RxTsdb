import { Sequelize } from 'sequelize';
import { RentalRecordService } from '../rentalRecordService';
import { RentalRecordDaoImpl } from '../../dao/impl/rentalRecordDaoImpl';
import { RentalRecord } from '../../model/rentalRecord.model';
import { propId } from '../../util';
import * as moment from 'moment';
import { ShopServiceImpl } from './shopServiceImpl';
import { Redis } from 'ioredis';
export class RentalRecordServiceImpl implements RentalRecordService {
  xcRedis: Redis;
  shopServiceImpl: ShopServiceImpl;
  constructor(sequelize: Sequelize, xcRedis: Redis) {
    RentalRecordDaoImpl.initModel(sequelize);
    this.xcRedis = xcRedis;
    this.shopServiceImpl = new ShopServiceImpl(sequelize, xcRedis);
  }
  async createRentalRecord(rentalRecord: RentalRecord): Promise<number> {
    const result = await RentalRecordDaoImpl.create(rentalRecord);
    return propId(result);
  }
  async getRentalRecordDetail(objectId: string) {
   const rentalRecord: RentalRecord = await RentalRecordDaoImpl.findOne({
      rejectOnEmpty: true,
      where: {
        objectId
      }
    });
    const shopInfo = await this.shopServiceImpl.getShopById(rentalRecord.shopId);
    const userInfo = { // TODO: 劝说方勇修改字段名
      eBikeEndDate: moment(rentalRecord.bindDate).unix() * 1000,
      eBikeApplyDate: moment(rentalRecord.bindDate).unix() * 1000,
      state: rentalRecord.state
    };
    return {
      shopInfo,
      userInfo
    };
  }
}
