/**
 * 开通城市表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const ShopModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '门店ID'
  },
  phone: {
    type: sequelize.CHAR(11),
    comment: '门店电话'
  },
  name: {
    type: sequelize.STRING,
    comment: '门店名称'
  },
  isEnable: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
    comment: '城市开通状态'
  },
  openDate: {
    type: sequelize.DATE,
    comment: '城市开通时间'
  },
  slb: {
    type: sequelize.STRING(64),
    allowNull: true,
    comment: '负载均衡。格式 0.0.0.0:9880'
  },
  address: {
    type: sequelize.STRING,
    comment: '地标信息'
  },
  lat: {
    type: sequelize.STRING(64),
    comment: '纬度'
  },
  lng: {
    type: sequelize.STRING(64),
    comment: '径度'
  },
  wgs84lat: {
    type: sequelize.STRING(64),
    comment: 'wgs84纬度'
  },
  wgs84lng: {
    type: sequelize.STRING(64),
    comment: 'wgs84径度'
  },
  agentId: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    comment: '所属客户'
  }
};
export class Shop {
  id?: number;
  isEnable?: boolean;
  name: string;
  phone: string;
  openDate?: Date;
  lat?: string;
  lng?: string;
  wgs84lat?: number;
  wgs84lng?: number;
  slb?: string;
  address?: string;
  agentId: number;
}
export class Coordinate {
  lat: number;
  lng: number;
}
export class GeoShop {
  id: number;
  address: string;
  name: string;
  phone: string;
}