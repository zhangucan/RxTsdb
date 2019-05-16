/**
 * 电池表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
/**
 *  车辆
 */

export const CarModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  carNo: {
    type: sequelize.STRING(16),
    unique: true
  },
  brand: {
    type: sequelize.STRING(16),
  },
  model: {
    type: sequelize.STRING(16),
  },
  area: {
    type: sequelize.STRING(32),
  }
};


export const DeviceModel = <ModelAttributes>{ // TODO: 待补充字段
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imei: {
    type: sequelize.STRING(16),
    allowNull: false
  }
};

// 车辆绑定关系表
export const EbikeBingingRelModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  carId: {
    type: sequelize.STRING(9),
    allowNull: false
  },
  imei: {
    type: sequelize.STRING(16),
    allowNull: false
  },
  userId: {
    type: sequelize.INTEGER,
    allowNull: true
  },
  agentId: {
    type: sequelize.INTEGER,
    allowNull: true
  },
  shopId: {
    type: sequelize.INTEGER,
    allowNull: true
  },
  deviceId: {
    type: sequelize.INTEGER,
    allowNull: true
  }
};

export class EbikeBingingRel {
  id?: number;
  carId?: string;
  imei?: string;
  userId?: number;
  agentId?: number;
  shopId?: number;
  deviceId?: number;
}

