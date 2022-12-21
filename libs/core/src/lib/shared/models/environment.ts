import { type Locale } from './locale';

export interface Environment {
  apiUrl?: string;
  googleAnalyticsId?: string;
  locales?: Array<Partial<Locale>>;
  production?: boolean;
  recaptchaKey?: string;
  sessionTimeout?: number;
}
