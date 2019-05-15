import { InitOptions } from 'sequelize';

export const CREATE_RULE = <InitOptions>{
  freezeTableName: true,
  paranoid: true, // 与deletedAt字段相关
  charset: 'utf8',
};