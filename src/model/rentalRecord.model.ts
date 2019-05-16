/**
 * 预约记录表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export enum RentalType  {
  EBIKE = 1, // 电单车
  BATTERY = 2 // 电池
};
export enum RentalState {
  RESERVING= 1, // 到期
  FINISHED= 2, // 未到期
  EXPIRED= 3, // 续约
};
export const RentalRecordModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: '记录表ID'
  },
  objectId: {
    type: sequelize.CHAR,
    allowNull: false,
    unique: true,
    comment: '用户在leancloud上注册的ID'
  },
  shopId: {
    type: sequelize.INTEGER,
    comment: '门店编号'
  },
  imei: {
    type: sequelize.STRING(16),
    allowNull: false
  },
  type: {
    type: sequelize.INTEGER,
    comment: '租赁类型'
  },
  state: {
    type: sequelize.INTEGER,
    comment: '租赁状态'
  },
  agentId: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '代理商ID'
  },
  bindDate: {
    type: sequelize.DATE,
    comment: '绑定时间'
  },
  expiryDate: {
    type: sequelize.DATE,
    comment: '用户设备到期时间'
  },
};

export class RentalRecord {
  id?: number;
  objectId?: string;
  agentId?: number;
  imei?: string;
  shopId?: number;
  type?: RentalType;
  state?: RentalState;
  bindDate?: Date;
  expiryDate?: Date;
}


