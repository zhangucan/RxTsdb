/**
 * 开通城市表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const ShopModel = <ModelAttributes>{
  shopId: {
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
    comment: '地标信息，json存储{lat:xxx,lng:xxx}'
  },
  agentId: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    comment: '所属客户'
  }
};
export class Shop {
  shopId?: number;
  isEnable?: boolean;
  name: string;
  phone: string;
  openDate?: Date;
  slb?: string;
  address?: string;
  agentId: number;
}