import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';
import { HttpClientXsrfModule, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FingerPrintAuth, FingerPrintAuthPluginWeb } from 'capacitor-fingerprint-auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Interceptors } from './helpers';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    HttpClientXsrfModule,
    AppRoutingModule
  ],
  providers: [
    Interceptors,
    FingerPrintAuth, FingerPrintAuthPluginWeb,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key: any, value: { name: any; }) => (typeof value === 'function') ? value.name : value;
    console.log('Routes:', JSON.stringify(router.config, replacer), 2);
  }
}
