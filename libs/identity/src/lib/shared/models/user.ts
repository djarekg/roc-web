import { userRole } from './user-role';

export interface User {
  addDate: Date;
  addUser: User;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  locked: boolean;
  lockoutEnd: Date;
  userName: string;
  userRoles: userRole[];
}
