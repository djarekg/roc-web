/**
 * Test if a string is null or empty.
 *
 * @export
 * @param {string | null | undefined} value - The value to test.
 * @returns {*}  {boolean} - True if the value is null or empty and false if it is not.
 */
export const isNullOrEmptyOrUndefined = (
  value: string | null | undefined
): value is null | undefined => {
  return !value?.length;
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
