import { User } from '../model/user.model';

export interface RentalRecordService {
  createRentalRecord(user: User): Promise<number>;
  getRentalRecordDetail(objectId: string);
}