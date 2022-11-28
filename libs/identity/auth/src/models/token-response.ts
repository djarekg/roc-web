import { type TokenUser } from './token-user';

export interface TokenResponse {
  token: string | null;
  user: TokenUser | null;
}
