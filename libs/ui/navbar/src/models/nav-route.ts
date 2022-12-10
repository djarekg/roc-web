import { type EnumLike } from '@roc-web/core/shared';

export interface NavRoute<T = EnumLike<string>> {
  children?: NavRoute<T>[];
  menuOpen?: boolean;
  name: string;
  relativeUrl?: string;
  role?: T | undefined;
}
