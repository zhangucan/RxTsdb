import { AgentService } from '../agentService';
import { AgentDaoImpl } from '../../dao/impl/agentDaoImpl';
import {  Agent } from '../../model/agent.model';
import { Sequelize } from 'sequelize';
import { propDataValues } from '../../util';
export class AgentServiceImpl implements AgentService {
  agentDao: AgentDaoImpl;
  constructor(sequelize: Sequelize) {
    AgentDaoImpl.initModel(sequelize);
  }

  async createAgent(agent: Agent): Promise<Agent> {
    const result = AgentDaoImpl.create(agent);
    return propDataValues(result);
  }
}
