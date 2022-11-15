import { Country } from './country';

export interface Locale {
  country: Country;
  countryId: string;
  id: string;
  isDefault: boolean;
  isSupported: boolean;
  languageCode: string;
  localeCode: string;
  name: string;
  order: number;
}
