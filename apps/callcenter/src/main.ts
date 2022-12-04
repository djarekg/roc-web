import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideCoreConfig } from '@roc-web/core/config';
import { provideSharedImports } from '@roc-web/core/shared';
import { provideStorage } from '@roc-web/core/storage';
import {
  ROOT_REDUCERS,
  RouterEffects,
  debugMetaReducers,
  provideCoreStore,
} from '@roc-web/core/store';
import {
  provideAuth,
  provideAuthInterceptors,
  provideAuthRoutes,
  provideToken,
} from '@roc-web/identity/auth';
// import { provideSettingsRoutes } from '@roc-web/identity/settings';
import { provideSettingsRoutes } from '@roc-web/identity/settings';
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
      ])
    ),
    provideRouter(
      [...APP_ROUTES, ...provideAuthRoutes(), ...provideSettingsRoutes()],
      // withEnabledBlockingInitialNavigation(),
      withDebugTracing(),
      withPreloading(PreloadAllModules),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
    provideStore(ROOT_REDUCERS, {
      metaReducers: debugMetaReducers,
      runtimeChecks: {
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
      },
    }),
    provideCoreStore(),
    provideRouterStore(),
    provideEffects(RouterEffects),
    provideStoreDevtools({
      logOnly: environment.production,
      maxAge: 25,
      name: 'Call Center',
    }),
    /**
     * provideAuthStore() is imported once in the root so that
     * the auth state is initialized.
     *
     * @see: https://ngrx.io/guide/effects#registering-root-effects
     */
    provideAuth(),
    provideToken(),
    provideCoreConfig(environment),
    provideStorage(),
    provideSharedImports(),
  ],
}).catch(error => console.error(error));
