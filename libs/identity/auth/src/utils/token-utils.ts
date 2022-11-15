import { DecodedToken } from '../models';
import { TokenUser } from '../models/token-user';

/**
 * Get user from JWT token.
 *
 * @export
 * @param {string} token
 * @returns {*}  {(ParsedTokenUser | null)}
 */
export function parseUser(token: string): TokenUser | null {
  const decodedToken = decode<DecodedToken>(token);

  if (decodedToken) {
    return {
      email: decodedToken.email,
      firstName: decodedToken.given_name,
      lastName: decodedToken.family_name,
      // userName: decodedToken.preferred_username,
    };
  }

  return null;
}

export function isValidToken(token: string, expiration: string): boolean {
  if (!token || !expiration) {
    return false;
  }

  const expirationPrimitive = +expiration;

  if (isNaN(expirationPrimitive)) {
    return false;
  }

  const nowPrimitive = Date.now().valueOf();
  return nowPrimitive < expirationPrimitive;
}

/**
 * Token utility that decodes the token.
 *
 * @export
 * @param {string} token The token to decode.
 * @returns {*}  {unknown} The payload of the token.
 */
export function decode<T = Record<string, unknown>>(token: string): T | null {
  if (!token || token === '') {
    return null;
  }

  const parts = token.split('.');

  if (parts.length !== 3) {
    throw new Error(
      `The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.`
    );
  }

  const decoded = urlBase64Decode(parts[1]);
  if (!decoded) {
    throw new Error('Cannot decode the token.');
  }

  return JSON.parse(decoded);
}

function urlBase64Decode(part: string): string {
  let output = part.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0: {
      break;
    }
    case 2: {
      output += '==';
      break;
    }
    case 3: {
      output += '=';
      break;
    }
    default: {
      throw new Error('Illegal base64url string!');
    }
  }
  return b64DecodeUnicode(output);
}

function b64decode(str: string): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';

  str = String(str).replace(/=+$/, '');

  if (str.length % 4 === 1) {
    throw new Error(
      `'atob' failed: The string to be decoded is not correctly encoded.`
    );
  }

  for (
    // initialize result and counters
    let bc = 0, bs: any, buffer: any, idx = 0;
    // get next character
    (buffer = str.charAt(idx++));
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer &&
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    ((bs = bc % 4 ? bs * 64 + buffer : buffer),
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}

function b64DecodeUnicode(token: string) {
  return decodeURIComponent(
    Array.prototype.map
      .call(b64decode(token), (c: any) => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-call
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
}
