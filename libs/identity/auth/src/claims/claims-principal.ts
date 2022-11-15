import { isNullOrEmpty } from '@roc-web/core';

import { DecodedToken } from '../models';

/**
 * The decoded JWT token claims principal.
 * Contains the roles and permissions of the user.
 *
 * @export
 * @class ClaimsPrincipal
 */
export class ClaimsPrincipal {
  readonly #decodedToken: DecodedToken;

  constructor(decodedToken: DecodedToken) {
    this.#decodedToken = decodedToken;
  }

  /**
   * Check if the token has the specified role.
   *
   * @param {string} name The name of the role to check.
   * @returns {*}  {boolean} True if the token has the role and false if it does not.
   */
  hasRole(name: string): boolean {
    return this.#hasProperty('role', name);
  }

  /**
   * Check if the token has the specified permission.
   *
   * @param {string} name The name of the permission to check.
   * @returns {*}  {boolean} True if the token has the permission and false if it does not.
   */
  hasPermission(name: string): boolean {
    return this.#hasProperty('permission', name);
  }

  /**
   * Check if the token has the specified property
   * with the specified value.
   *
   * @param {string} property The property to check.
   * @param {string} value The value to check.
   * @returns {*}  {boolean} True if the token has the property and value and false if it does not.
   */
  #hasProperty(property: string, value: string): boolean {
    if (!(property in this.#decodedToken)) {
      return false;
    }

    if (isNullOrEmpty(value)) {
      return false;
    }

    value = value.toLowerCase();

    const propertyValue = this.#decodedToken[property];

    // check property value array for value
    if (Array.isArray(propertyValue)) {
      return (
        propertyValue.findIndex(item => item.toLowerCase() === value) !== -1
      );
    }

    if (typeof propertyValue === 'string') {
      return propertyValue === value;
    }

    return false;
  }
}
