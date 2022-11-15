import { Claim } from './claim';
import { Permission } from './permission';

export interface Role {
  claims: Claim[];
  concurrencyStamp: string;
  id: string;
  name: string;
  normalizedName: string;
  rolePermissions: Permission[];
}
