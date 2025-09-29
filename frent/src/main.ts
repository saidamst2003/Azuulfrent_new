import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  providers: [provideRouter(routes),
    provideHttpClient(withFetch()), 
    provideZonelessChangeDetection()
    
  ]
});