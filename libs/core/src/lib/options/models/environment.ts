import { Locale } from '../../i18n/models/locale';

export interface Environment {
  apiUrl?: string;
  googleAnalyticsId?: string;
  locales?: Array<Partial<Locale>>;
  hmr?: boolean;
  production?: boolean;
  recaptchaKey?: string;
  sessionTimeout?: number;
}
