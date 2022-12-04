import { type Locale } from './locale';

export interface Environment {
  apiUrl?: string;
  googleAnalyticsId?: string;
  hmr?: boolean;
  locales?: Array<Partial<Locale>>;
  production?: boolean;
  recaptchaKey?: string;
  sessionTimeout?: number;
}
