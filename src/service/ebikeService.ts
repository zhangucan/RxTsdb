export interface EbikeService {
  getEBikeBindingRel(objectId: string): Promise<any>;
}