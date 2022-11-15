import { User } from '@roc-web/identity';

export interface TokenUser
  extends Pick<User, 'firstName' | 'lastName' | 'email'> {}
