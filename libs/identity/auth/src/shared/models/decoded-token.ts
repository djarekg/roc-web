import { type Authorization } from './authorization';

/**
 * A claims principal.
 *
 * @export
 * @interface DecodedToken
 */
export interface DecodedToken extends Authorization {
  readonly [key: string]: string[] | string;
  readonly email: string;
  readonly family_name: string;
  readonly given_name: string;
  readonly preferred_username: string;
}
