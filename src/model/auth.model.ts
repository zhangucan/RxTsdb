/**
 * 权限表
 */
import { ModelAttributes, Model } from 'sequelize';
import * as sequelize from 'sequelize';
export const model = <ModelAttributes>{
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  roleId: {
    type: sequelize.INTEGER,
    comment: '绑定角色'
  },
  name: {
    type: sequelize.STRING,
    comment: '权限名称'
  }
};
export class AuthModel extends Model {
  model: ModelAttributes;
  constructor() {
    super();
    this.model = model;
  }
}

export class Auth {
  authId: number;
  roleId: number;
  name: string;
}