import { isNullOrEmpty } from '@roc-web/core';
import { type ClaimsPrincipal } from '../models';
import { decode } from './token-util';

/**
 * Check if the token has the specified role.
 *
 * @param {string} name The name of the role to check.
 * @param {string} token The token to decode.
 * @returns {*}  {boolean} True if the token has the role and false if it does not.
 */
export function hasRole(name: string, token: string | null): boolean {
  return hasProperty('role', name, token);
}

/**
 * Check if the token has the specified permission.
 *
 * @param {string} name The name of the permission to check.
 * @param {string} token The token to decode.
 * @returns {*}  {boolean} True if the token has the permission and false if it does not.
 */
export function hasPermission(name: string, token: string | null): boolean {
  return hasProperty('permission', name, token);
}

/**
 * Check if the token has the specified property
 * with the specified value.
 *
 * @param {string} property The property to check.
 * @param {string} value The value to check.
 * @param {string} token The token to decode.
 * @returns {*}  {boolean} True if the token has the property and value and false if it does not.
 */
function hasProperty(
  property: string,
  value: string,
  token: string | null
): boolean {
  if (isNullOrEmpty(token)) {
    return false;
  }

  const decodedToken = decode(token);

  if (!decodedToken || !(property in decodedToken)) {
    return false;
  }

  if (isNullOrEmpty(value)) {
    return false;
  }

  const propertyValue = decodedToken[property];

  // check property value array for value
  if (Array.isArray(propertyValue)) {
    return propertyValue.findIndex(item => item.toLowerCase() === value) !== -1;
  }

  if (typeof propertyValue === 'string') {
    return (
      propertyValue.localeCompare(value, undefined, {
        sensitivity: 'accent',
      }) === 0
    );
  }

  return false;
}

export function parseClaimsPrincipal(token: string | null): ClaimsPrincipal {
  let permissions: string[] | null = null;
  let roles: string[] | null = null;

  if (!!token) {
    const decodedToken = decode(token);

    if (decodedToken) {
      if ('permission' in decodedToken) {
        const { permission } = decodedToken;
        permissions = Array.isArray(permission) ? permission : [permission];
      }

      if ('role' in decodedToken) {
        const { role } = decodedToken;
        roles = Array.isArray(role) ? role : [role];
      }
    }
  }

  return {
    permissions: permissions ?? [],
    roles: roles ?? [],
  };
}
