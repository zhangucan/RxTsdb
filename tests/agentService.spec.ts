import { Model, Sequelize, DataTypes } from 'sequelize';
import { CREATE_RULE } from '../src/config';
import * as Redis from 'ioredis';
/*  This is the original set of tests from mqtt-rx, which uses ws on port 9001
*/
import { AgentServiceImpl } from '../src/service/impl/agentServiceImpl';
import { ShopServiceImpl } from '../src/service/impl/shopServiceImpl';
import { ShopModel } from '../src/model/shop.model';
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
  agentService: false,
  'shopService#createShop': true,
  'shopService#upsertShop': false,
  'shopService#upsertGeoShop': false,
  'shopService#searchAround': true,
  'shopService#getShopById': false,
};
describe('data processing', () => {
  it('#agentService', async  () => {
    if (sw.agentService) {
      const service = new AgentServiceImpl(scmManyiSequelize);
      const result = await service.createAgent({
        phone: '13109991112',
        account: '湖北省武汉市洪山区'
      });
      console.log('agentService', result);
    }else {
      console.log(`sw.agentService is false, test is skip`);
    }
  });
  it('#shopService', async  () => {
    if (sw['shopService#createShop']) {
      const service = new ShopServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.createShop({
        name: '123',
        phone: '13122112221',
        agentId: 2,
        address: '湖北省武汉市洪山区'
      });
      await service.upsertGeoShop({
        lat: 30.500817,
        lng: 114.431281,
      }, result);
      console.log('shopService', result);
    }else {
      console.log(`shopService#createShop is false, test is skip`);
    }
  });
  it('#shopService', async  () => {
    if (sw['shopService#upsertShop']) {
      const service = new ShopServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.upsertShop({
        name: '123',
        phone: '13122112212',
        agentId: 1
      });
      console.log('shopService', result);
    } else {
      console.log(`shopService#upsertShop is false, test is skip`);
    }
  });
  it('#shopService', async  () => {
    if (sw['shopService#upsertGeoShop']) {
      const service = new ShopServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.upsertGeoShop({
        lat: 30.500817,
        lng: 114.431281,
      }, 1);
      console.log('upsertGeoShop', result);
    } else {
      console.log(`shopService#upsertGeoShop is false, test is skip`);
    }
  });
  it('#shopService', async  () => {
    if (sw['shopService#searchAround']) {
      const service = new ShopServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.searchAround({
        lat: 30.500817,
        lng: 114.431281,
      }, 10000, 2);
      console.log('searchAround', result);
    } else {
      console.log(`shopService#searchAround is false, test is skip`);
    }
  });
  it('#shopService', async  () => {
    if (sw['shopService#getShopById']) {
      const service = new ShopServiceImpl(scmManyiSequelize, xcRedis);
      const result = await service.getShopById(1);
      console.log('getShopById', result);
    } else {
      console.log(`shopService#getShopById is false, test is skip`);
    }
  });
});


