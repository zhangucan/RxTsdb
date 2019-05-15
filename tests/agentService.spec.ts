import { Model, Sequelize, DataTypes } from 'sequelize';
import { CREATE_RULE } from '../src/config';
/*  This is the original set of tests from mqtt-rx, which uses ws on port 9001
*/
import { AgentServiceImpl } from '../src/service/impl/agentServiceImpl';
import { ShopServiceImpl } from '../src/service/impl/shopServiceImpl';
import { ShopModel } from '../src/model/shop.model';

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

describe('data processing', () => {
  it('#agentService', async  () => {
    const service = new AgentServiceImpl(scmManyiSequelize);
    const result = await service.createAgent({
      phone: '13109991111',
      account: '湖北省武汉市'
    });
    console.log(result);
  });
  it('#shopService', async  () => {
    const service = new ShopServiceImpl(scmManyiSequelize);
    const result = await service.createShop({
      name: '123',
      phone: '13122112211',
      agentId: 1
    });
    console.log(result);
  });
  // it('#shopService2', async  () => {
  //   ShopDaoImpl.init({
  //     id: {
  //       type: DataTypes.INTEGER.UNSIGNED,
  //       autoIncrement: true,
  //       primaryKey: true,
  //     },
  //     name: {
  //       type: new DataTypes.STRING(128),
  //       allowNull: false,
  //     },
  //     preferredName: {
  //       type: new DataTypes.STRING(128),
  //       allowNull: true
  //     }
  //   }, {
  //     modelName: 'xc_led_shop2',
  //     sequelize: scmManyiSequelize
  //   });
  //   await ShopDaoImpl.sync();
  //   const result = await ShopDaoImpl.create({
  //     name: 'Johnny2',
  //     preferredName: 'John',
  //   });
  //   console.log(result);
  // });
});


