import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { HideComponentsGuard } from './hide-components.guard';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideRouter, withDebugTracing, withHashLocation } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: []
};

