/**
 * 角色表
 */
import { ModelAttributes } from 'sequelize';
import * as sequelize from 'sequelize';
export const RoleModel = <ModelAttributes>{
  roleId: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    comment: '角色名称'
  }
};
export class Role {
  roleId: number;
  name: string;
}