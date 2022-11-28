import { type User } from '@roc-web/identity';

export interface TokenUser
  extends Pick<User, 'email' | 'firstName' | 'lastName'> {}
