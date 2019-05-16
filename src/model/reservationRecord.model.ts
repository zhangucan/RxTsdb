/**
 * 预约记录表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
enum ReservationType  {
  EBIKE = 1, // 电单车
  BATTERY = 2 // 电池
};
enum ReserveState {
  RESERVING= 1, // 预约中
  FINISHED= 2, // 已完成
  EXPIRED= 3, // 已失效
  CANCEL= 4 // 取消
};
export const ReservationRecordModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: '记录表ID'
  },
  userId: {
    type: sequelize.INTEGER,
    comment: '用户编号'
  },
  shopId: {
    type: sequelize.INTEGER,
    comment: '门店编号'
  },
  type: {
    type: sequelize.INTEGER,
    comment: '预约类型'
  },
  reservationCode: {
    type: sequelize.CHAR,
    comment: '预约码'
  },
  state: {
    type: sequelize.INTEGER,
    comment: '预约状态'
  },
  agentId: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '代理商ID'
  }
};

export class ReservationRecord {
  id: number;
  userId: number;
  agentId?: number;
  shopId: number;
  type: ReservationType;
  reservationCode: string;
  state: ReserveState;
}


