import { type Locale } from '../i18n/models';

export interface Environment {
  apiUrl?: string;
  googleAnalyticsId?: string;
  hmr?: boolean;
  locales?: Array<Partial<Locale>>;
  production?: boolean;
  recaptchaKey?: string;
  sessionTimeout?: number;
}
