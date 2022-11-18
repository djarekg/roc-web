/**
 * Test if a string is null or empty.
 *
 * @export
 * @param {string | null | undefined} value - The value to test.
 * @returns {*}  {boolean} - True if the value is null or empty and false if it is not.
 */
export const isNullOrEmpty = (
  value: string | null | undefined
): value is null => {
  return !value?.length;
};
