import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  /* For removing console logs during production incase of dangling log not removed
  if (window) {
    window.console.log = () => {};
  }*/
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
