import { type Locale } from './locale';

export interface LocaleCountry {
  description: string;
  id: string;
  isSupported: boolean;
  locales: Locale[];
  name: string;
  order: number;
}
