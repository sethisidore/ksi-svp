import { Component } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

import { AlertService } from './helpers';

const { SplashScreen, StatusBar, Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  status: NetworkStatus;
  handler: PluginListenerHandle;

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

    this.watchNetworkStatus();
  }

  async watchNetworkStatus() {
    this.handler = Network.addListener('networkStatusChange', (status) => {
      this.status = status;
      if (!this.status.connected) {
        this.alertService.presentToastWithOptions({
          message: 'No internet connection: Please check network settings!',
          position: 'bottom',
          color: 'red',
          animated: true,
          duration: 5000
        });
      } else {
        setTimeout(() => {
          if (this.status.connected) {
            this.alertService.toast.dismiss();
            this.alertService.presentToastWithOptions({
              message: 'Connection Restored!!',
              position: 'bottom',
              color: 'primary',
              animated: true,
              duration: 2000
            });
          }
        }, 3000);
        this.alertService.toast.dismiss();
      }
    });
    this.status = await Network.getStatus();
  }
}
