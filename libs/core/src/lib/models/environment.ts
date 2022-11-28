import { type Locale } from '../i18n/models';

export interface Environment {
  apiUrl?: string;
  googleAnalyticsId?: string;
  locales?: Array<Partial<Locale>>;
  hmr?: boolean;
  production?: boolean;
  recaptchaKey?: string;
  sessionTimeout?: number;
}
