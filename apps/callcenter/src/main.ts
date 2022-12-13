import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { providerRoutes } from '@roc-web/core';
import { provideCoreDefaults } from '@roc-web/core/options';
import { SHARED_IMPORTS } from '@roc-web/core/shared';
import { provideCoreState } from '@roc-web/core/state';
import { provideStorage } from '@roc-web/core/storage';
import { IDENTITY_AUTH_ROUTES, provideIdentity } from '@roc-web/identity/auth';
import { IDENTITY_SETTINGS_ROUTES } from '@roc-web/identity/settings';
import { HTTP_CACHE_INTERCEPTORS } from '@roc-web/web/cache';
import { HTTP_CORE_INTERCEPTORS } from '@roc-web/web/http';

import { APP_ROUTES, AppComponent } from './app';
import { environment } from './environments';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(
      withInterceptors([...HTTP_CORE_INTERCEPTORS, ...HTTP_CACHE_INTERCEPTORS]),
    ),
    provideRouter(
      providerRoutes(
        APP_ROUTES,
        IDENTITY_AUTH_ROUTES,
        IDENTITY_SETTINGS_ROUTES,
      ),
      withDebugTracing(),
      withPreloading(PreloadAllModules),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    provideCoreDefaults(environment),
    provideCoreState(),
    provideIdentity(),
    provideStorage(),
    importProvidersFrom(SHARED_IMPORTS),
  ],
}).catch(error => console.error(error));
