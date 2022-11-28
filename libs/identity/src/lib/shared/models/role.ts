import { type Claim } from './claim';
import { type Permission } from './permission';

export interface Role {
  claims: Claim[];
  concurrencyStamp: string;
  id: string;
  name: string;
  normalizedName: string;
  rolePermissions: Permission[];
}
