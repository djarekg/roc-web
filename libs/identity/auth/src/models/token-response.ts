import { ClaimsPrincipal } from './claims-principal';
import { TokenUser } from './token-user';

export interface TokenResponse {
  claims: ClaimsPrincipal | null;
  token: string | null;
  user: TokenUser | null;
}
