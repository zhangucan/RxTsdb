import { Sequelize } from 'sequelize';
import { BaseDao } from '../baseDao';
export class BaseDaoImpl implements BaseDao  {
  initModel(sequelize: Sequelize ) {
    // 初始化sequelize
  }
}