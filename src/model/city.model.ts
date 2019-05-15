/**
 * 开通城市表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const CityModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cityCode: {
    type: sequelize.INTEGER(),
    autoIncrement: true,
    comment: '城市code'
  },
  city: {
    type: sequelize.STRING(5),
    allowNull: false,
    comment: '城市名称'
  },
  province: {
    type: sequelize.STRING(5),
    allowNull: true,
    comment: '省份'
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
    allowNull: true,
    comment: '所属客户'
  }
};