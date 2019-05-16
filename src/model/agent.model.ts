/**
 * 代理商表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const AgentModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mode: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '代理商类型'
  },
  location: {
    type: sequelize.STRING(128),
    comment: '地理位置信息'
  },
  recommendCode: {
    type: sequelize.CHAR(8),
    comment: '企业推荐码'
  },
  isEnable: {
    type: sequelize.BOOLEAN,
    comment: '启用状态'
  },
  stopDate: {
    type: sequelize.DATE,
    comment: '停用时间'
  },
  company: {
    type: sequelize.STRING(64),
    comment: '代理商名称/公司名称'
  },
  person: {
    type: sequelize.STRING(16),
    comment: '注册者名字'
  },
  bankInfo: {
    type: sequelize.STRING(1024),
    allowNull: true,
    comment: '提现银行卡相关信息'
  },
  owners: {
    type: sequelize.STRING(1024),
    allowNull: true,
  },
  members: {
    type: sequelize.STRING(1024),
  },
  phone: {
    type: sequelize.CHAR(11),
    // allowNull: false,
    unique: true,
    comment: '注册手机号'
  },
  approved: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
    comment: '是否有平台登录权限'
  },
  pod: {
    type: sequelize.INTEGER,
    allowNull: true,
    comment: '分红比例'
  },
  batch: {
    type: sequelize.STRING(32),
    allowNull: true,
    comment: '代理商入库批次'
  },
  withdrawMoney: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '代理商可提现金额，分红金额'
  },
  recommendMoney: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '代理商可提现金额，推荐金金额'
  },
  roleId: {
    type: sequelize.INTEGER.UNSIGNED,
    comment: '角色ID'
  },
  account: {
    type: sequelize.CHAR(64),
    comment: '用户账户'
  },
  password: {
    type: sequelize.CHAR(32),
    comment: '用户密码'
  },
  salt: {
    type: sequelize.INTEGER().UNSIGNED,
    comment: 'MD5的salt，时间戳'
  },
  pwdIsModified: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
    comment: '是否修改过密码'
  }
};
export class Agent {
  agentId?: number;
  mode?: number;
  location?: string;
  recommendCode?: string;
  isEnable?: boolean;
  stopDate?: Date;
  company?: string;
  person?: string;
  bankInfo?: string;
  owners?: string;
  members?: string;
  phone?: string;
  approved?: boolean;
  pod?: number;
  batch?: string;
  withdrawMoney?: number;
  recommendMoney?: number;
  roleId?: number;
  account?: string;
  password?: string;
  salt?: number;
  pwdIsModified?: boolean;
};

