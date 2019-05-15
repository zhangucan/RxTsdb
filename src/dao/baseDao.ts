import { Sequelize } from 'sequelize';

export interface BaseDao {
  initModel(sequelize: Sequelize ): void;
}