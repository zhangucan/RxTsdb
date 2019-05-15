/**
 * 电池表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
/**
 * 电池当前所属关系
 */
const BatteryOwner = {
  PEOPLE: 1,
  CABINET: 2,
  NONE: 0
};

export const BatteryModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imei: {
    type: sequelize.STRING(16),
    comment: '电池imei'
  },
  batterySN: {
    type: sequelize.STRING(16),
    unique: true,
    comment: '电池SN/电池识别码'
  },
  agentId: {
    type: sequelize.INTEGER,
    allowNull: true,
    comment: '所属代理商id'
  },
  bindedUsrId: {
    type: sequelize.CHAR,
    allowNull: true,
    comment: '绑定的用户id'
  },
  bindedCabinetSN: {
    type: sequelize.STRING(16),
    comment: '当前安放于某个电池柜SN'
  },
  owner: {
    type: sequelize.INTEGER,
    allowNull: true,
    defaultValue: BatteryOwner.NONE,
    comment: '电池所属关系。人/电池柜/无'
  },
  version: {
    type: sequelize.INTEGER,
    allowNull: true,
    comment: '电池版本号'
  },
  deviceType: {
    type: sequelize.INTEGER(),
    allowNull: true,
    comment: '电池type'
  },
  city: {
    type: sequelize.STRING(5),
    allowNull: true,
    comment: '电池所属城市'
  },
  cityCode: {
    type: sequelize.INTEGER(),
    allowNull: true,
    comment: '电池所属城市code'
  },
  chargeAmount: {
    type: sequelize.INTEGER,
    comment: '总充电量'
  },
  batch: {
    type: sequelize.STRING(32),
    comment: '生产批次'
  },
  isOnline: {
    type: sequelize.INTEGER,
    comment: '开关机状态',
  },
  chargeState: {
    type: sequelize.INTEGER,
    comment: '充放电状态',
  },
  producer: {
    type: sequelize.STRING,
    comment: '生产商'
  },
  bmsSN: {
    type: sequelize.STRING(16),
    unique: true,
    allowNull: true,
    comment: 'bmsSN'
  },
  bmsVersion: {
    type: sequelize.STRING(12),
    comment: 'bms版本号'
  },
  barcode: {
    type: sequelize.STRING(32),
    unique: true,
    allowNull: true,
    comment: '电池条形码'
  },
  isActived: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
    comment: '电池是否激活'
  },
  activedDate: {
    type: sequelize.DATE,
    comment: '激活时间'
  }
};


