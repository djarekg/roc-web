import { Locale } from './locale';

export interface Country {
  description: string;
  id: string;
  isSupported: boolean;
  locales: Locale[];
  name: string;
  order: number;
}
