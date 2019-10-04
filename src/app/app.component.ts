import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { AlertService } from './helpers';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private alertService: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
      this.alertService.presentToast(error);
    });

    StatusBar.hide().catch(error => {
      this.alertService.presentToast(error);
    });
  }
}
