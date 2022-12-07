import { type User } from '@roc-web/identity/shared';

export interface TokenUser
  extends Pick<User, 'email' | 'firstName' | 'lastName'> {}
