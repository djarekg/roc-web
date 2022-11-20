export type Mutable<T> = {
  -readonly [property in keyof T]: T[property];
};
