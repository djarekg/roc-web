export type EnumLike<T = unknown> = {
  [name: string]: T | string;
  [name: number]: string;
};
