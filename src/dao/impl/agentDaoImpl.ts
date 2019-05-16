import { AgentDao } from '../agentDao';
import { AgentModel } from '../../model/agent.model';
import { Model, Sequelize } from 'sequelize';
import { CREATE_RULE } from '../../config';
export class AgentDaoImpl extends Model implements AgentDao  {
  static initModel(sequelize: Sequelize ) {
    this.init(AgentModel, {
      ...CREATE_RULE,
      modelName: 'xc_led_agent',
      sequelize
    });
    this.sync();
  }
}