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
import { providerRoutes } from '@roc-web/core/common';
import { provideCoreConfig } from '@roc-web/core/config';
import { provideSharedImports } from '@roc-web/core/shared';
import { provideCoreState } from '@roc-web/core/state';
import { provideStorage } from '@roc-web/core/storage';
import {
  IDENTITY_AUTH_ROUTES,
  provideAuthInterceptors,
  provideIdentity,
} from '@roc-web/identity/auth';
import { IDENTITY_SETTINGS_ROUTES } from '@roc-web/identity/settings';
import { provideHttpCacheInterceptors } from '@roc-web/web/cache';
import { provideHttpInterceptors } from '@roc-web/web/http';

import { APP_ROUTES, AppComponent } from './app';
import { environment } from './environments';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(
      withInterceptors([
        ...provideHttpInterceptors(),
        ...provideHttpCacheInterceptors(),
        ...provideAuthInterceptors(),
      ]),
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
    provideCoreState(),
    provideIdentity(),
    provideCoreConfig(environment),
    provideStorage(),
    importProvidersFrom(provideSharedImports()),
  ],
}).catch(error => console.error(error));
