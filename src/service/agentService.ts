import { Agent } from '../model/agent.model';

export interface AgentService {
  createAgent(agent: Agent): Promise<Agent> ;
}