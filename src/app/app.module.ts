// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerticalNavbarComponent } from './components/vertical-navbar/vertical-navbar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockService } from './services/mock.service';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    NavbarComponent, VerticalNavbarComponent, BottomNavComponent, MobileNavbarComponent,
    HttpClientInMemoryWebApiModule.forRoot(MockService),
  ],

  providers: [InAppBrowser],
  bootstrap: [AppComponent],
})
export class AppModule {}
