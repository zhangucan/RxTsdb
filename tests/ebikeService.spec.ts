import { Model, Sequelize, DataTypes } from 'sequelize';
import * as Redis from 'ioredis';
import * as moment from 'moment';
import { EbikeServiceImpl} from '../src/service/impl/ebikeServiceImpl';
import { RentalRecordServiceImpl} from '../src/service/impl/rentalRecordServiceImpl';
import { UserDaoImpl } from '../src/dao/impl/userDaoImpl';
import { CarDaoImpl, EbikeBingingRelDaoImpl, DeviceDaoImpl } from '../src/dao/impl/ebikeDaoImpl';
/*  This is the original set of tests from mqtt-rx, which uses ws on port 9001
*/
const xcRedis = new Redis({
  keyPrefix: 'xc_led_', // 前缀
  host: 'pre.xiaoantech.com',
  port: 6379,
  db: 0,
});
class ShopDaoImpl extends Model {
}
const manyiConfig = {
  mysql: {
    host: 'pre.xiaoantech.com',
    user: 'root',
    password: 'Xiaoan2019',
    database: 'scm',
    multipleStatements: true
  },
};
const createSequelize = config => new Sequelize('scm', config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  benchmark: true,
  database: 'scm',
  pool: {
    max: 100,
    min: 0,
    idle: 30000
  },
  timezone: '+08:00', // 东八时区
});
const scmManyiSequelize = createSequelize(manyiConfig.mysql);

scmManyiSequelize.authenticate().then(() => {
  console.log('---------scmManyiSequelize db connect suc');
}).catch((err) => {
  console.log('---------scmManyiSequelize db connect fail', err);
});

const sw = {
  'ebikeService#createShop': false,
  'ebikeService#getEBikeBindingRel': false,
  'ebikeService#createRentalRecord': false,
  'ebikeService#getRentalRecordDetail': true,
};
describe('data processing', () => {
  it('#createShop', async  () => {
    if (sw['ebikeService#createShop']) {
      UserDaoImpl.initModel(scmManyiSequelize);
      CarDaoImpl.initModel(scmManyiSequelize);
      DeviceDaoImpl.initModel(scmManyiSequelize);
      EbikeBingingRelDaoImpl.initModel(scmManyiSequelize);
      // const user = await UserDaoImpl.create({
      //   objectId: '5cda2a50f884af0073010156',
      //   phone: '13199992222'
      // });
      // console.log('user', user);
      // const car = await CarDaoImpl.create({
      //   carNo: '100600002',
      // });
      // console.log('car', car);
      // const device = await DeviceDaoImpl.create({
      //   imei: '868183030470848'
      // });
      // console.log('device', device);
      const result = await EbikeBingingRelDaoImpl.create({
        userId: 1,
        shopId: 25,
        agentId: 2,
        carId: 1,
        deviceId: 1,
        imei: '868183030470848'
      });
      console.log(result);
    }else {
      console.log(`sw.agentService is false, test is skip`);
    }
  });
  it('#ebikeService', async  () => {
    if (sw['ebikeService#getEBikeBindingRel']) {
      const service = new EbikeServiceImpl(scmManyiSequelize);
      const result = await service.getEBikeBindingRel('5cda2a50f884af0073010156');
      console.log('getShopById', result);
    }else {
      console.log(`sw.getEBikeBindingRel is false, test is skip`);
    }
  });
  it('#ebikeService', async  () => {
    if (sw['ebikeService#createRentalRecord']) {
      const service = new RentalRecordServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.createRentalRecord({
        objectId: '5cda2a50f884af0073010156',
        agentId: 2,
        shopId: 25,
        type: 1,
        state: 2,
        imei: '868183030470848',
        bindDate: moment().subtract('years', 2).toDate(),
        expiryDate: moment().toDate(),
      });
      console.log('createRentalRecord', result);
    }else {
      console.log(`sw.getEBikeBindingRel is false, test is skip`);
    }
  });
  it('#ebikeService', async  () => {
    if (sw['ebikeService#getRentalRecordDetail']) {
      const service = new RentalRecordServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.getRentalRecordDetail('5cda2a50f884af0073010156');
      console.log('createRentalRecord', result);
    }else {
      console.log(`sw.getEBikeBindingRel is false, test is skip`);
    }
  });
});


