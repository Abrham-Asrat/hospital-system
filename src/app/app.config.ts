import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // ✅ Enables efficient change detection
    provideRouter(routes), // ✅ Provides the application routes
    importProvidersFrom(ReactiveFormsModule) // ✅ Enables reactive forms
  ],
};
