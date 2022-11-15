/**
 * A claims principal.
 *
 * @export
 * @interface DecodedToken
 */
export interface DecodedToken {
  [key: string]: string | string[];
  email: string;
  family_name: string;
  given_name: string;
  preferred_username: string;
}
