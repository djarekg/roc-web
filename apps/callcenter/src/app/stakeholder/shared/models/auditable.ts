import { type User } from '@roc-web/identity/shared';

export interface Auditable {
  addDate: Date;
  addUser: User;
  editDate: Date;
  editUser: User;
}
