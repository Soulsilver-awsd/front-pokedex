import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { provideTranslateService } from '@ngx-translate/core'
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { environment } from './app/environments/environments';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideTranslateService({
            loader: provideTranslateHttpLoader({
                prefix: environment.I18N.PREFIX_PATH,
                suffix: '.json'
            }),
            fallbackLang: environment.I18N.FALLBACK_LANG,
            lang: environment.I18N.DEFAULT_LANG

        })
    ]
};
