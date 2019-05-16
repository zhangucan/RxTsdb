/**
 * 用户信息表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const UserModel = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: '用户表的自增ID'
  },
  objectId: {
    type: sequelize.CHAR,
    allowNull: false,
    unique: true,
    comment: '用户在leancloud上注册的ID'
  },
  phone: {
    type: sequelize.CHAR(11),
    allowNull: false,
    unique: true,
    comment: '用户手机号'
  },
  deposited: {
    type: sequelize.BOOLEAN,
    defaultValue: false,
    comment: '用户押金支付状态'
  },
  authState: {
    type: sequelize.INTEGER,
    comment: '用户实名认证状态,1:提交实名认证，2：实名认证通过，3：实名认证失败',
  },
  authDate: {
    type: sequelize.DATE,
    comment: '审核通过时间'
  },
  applyDate: {
    type: sequelize.DATE,
    comment: '申请电池时间'
  },
  bindDate: {
    type: sequelize.DATE,
    comment: '绑定电池时间'
  },
  authFailReason: {
    type: 'varchar(1023)',
    comment: '认证失败原因'
  },
  depositedMount: {
    type: sequelize.INTEGER(),
    comment: '押金金额'
  },
  depositedInfo: {
    type: 'varchar(1023)',
    comment: '押金支付信息'
  },
  userName: {
    type: sequelize.STRING(16),
    comment: '姓名'
  },
  personInfo: {
    type: 'varchar(1023)',
    comment: '用户实名信息'
  },
  balance: {
    type: sequelize.INTEGER,
    defaultValue: 0,
    comment: '用户钱包余额'
  },
  recommendCode: {
    type: sequelize.CHAR(6),
    comment: '用户推荐码'
  },
  withdrawAccount: {
    type: 'varchar(255)',
    comment: '用户提现账户信息',
  },
  cardExpiryDate: {
    type: sequelize.DATE,
    comment: '用户套餐到期时间'
  },
  cardType: {
    type: 'varchar(4)',
    comment: '卡类型'
  },
  cardImageUri: {
    type: 'varchar(255)',
    comment: '图片url',
  },
  // backInfo: {
  //   backType: "user", // 退租申请人类型，user：本人，operator：后台人员
  //   applyReturnMan: "", // 退租申请人
  //   remark: "", // 备注信息
  //   operateReturnMan: "", // 确认退租操作人
  //   depositedAmount: 9900, // 退还押金金额
  //   depositedRefundRemark: "", // 押金退还备注
  // }
  backInfo: {
    type: 'varchar(1024)',
    comment: '用户退租信息'
  },
  userStateChangeDate: {
    type: sequelize.DATE,
    comment: '用户状态变化时间'
  }
};

export class User {
  id?: number;
  objectId?: string;
  phone?: string;
  deposited?: boolean;
  authState?: number;
  authDate?: Date;
  applyDate?: Date;
  authFailReason?: string;
  depositedMount?: number;
  depositedInfo?: number;
  userName?: string;
  personInfo?: string;
  balance?: number;
  recommendCode?: string;
  withdrawAccount?: string;
  cardExpiryDate?: Date;
  cardType?: string;
  cardImageUri?: string;
  backInfo?: string;
  userStateChangeDate?: string;
}