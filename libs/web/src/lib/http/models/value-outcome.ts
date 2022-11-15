export class ValueOutcome<T> {
  /**
   * The outcome status code.
   *
   * @type {number}
   * @memberof ValueOutcome
   */
  statusCode?: number;
  /**
   * A boolean value indicating whether the outcome was successful.
   *
   * @type {boolean}
   * @memberof ValueOutcome
   */
  success: boolean = false;
  /**
   * A boolean value indicating whether the outcome was a failure.
   *
   * @type {boolean}
   * @memberof ValueOutcome
   */
  failure: boolean = false;
  /**
   * An array of messages.
   *
   * @type {string[] | null}
   * @memberof ValueOutcome
   */
  messages: string[] | null = null;
  /**
   * A collection of keys.
   *
   * @type {{ [key: string]: unknown }}
   * @memberof ValueOutcome
   */
  keys?: { [key: string]: unknown };
  /**
   * An optional value.
   *
   * @type {T}
   * @memberof ValueOutcome
   */
  value?: T;
}
