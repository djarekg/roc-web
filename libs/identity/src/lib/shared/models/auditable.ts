import { type User } from './user';

export interface Auditable {
  addDate: Date;
  addUser: User;
  editDate: Date;
  editUser: User;
}
