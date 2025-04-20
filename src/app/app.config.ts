import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    { provide: API_URL, useValue: 'http://localhost:8080' },
  ],
};
