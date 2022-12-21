import { type LocaleCountry } from './locale-country';

export interface Locale {
  country: LocaleCountry;
  countryId: string;
  id: string;
  isDefault: boolean;
  isSupported: boolean;
  languageCode: string;
  localeCode: string;
  name: string;
  order: number;
}
