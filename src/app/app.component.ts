import { Component } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { FingerPrintAuth } from 'capacitor-fingerprint-auth';

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
    private alertService: AlertService,
    private fingerAuth: FingerPrintAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.fingerOrFaceAuth().catch(error => {
      this.alertService.presentToast(error)
    })

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
          color: 'warning',
          animated: true,
          duration: 5000,
          showCloseButton: true
        });
      } else {
        setTimeout(() => {
          if (this.status.connected) {
            this.alertService.presentToastWithOptions({
              message: 'Connection Restored!!',
              position: 'bottom',
              color: 'medium',
              animated: true,
              duration: 2000,
              showCloseButton: true
            });
          }
        }, 3000);
      }
    });
    this.status = await Network.getStatus();
  }

  async fingerOrFaceAuth() {
    const data = await this.fingerAuth.available();
    if (!data.has) {
      return this.alertService.presentToastWithOptions({
        message: 'No fingerprint/face id support detected',
        position: 'middle',
        animated: true,
        showCloseButton: true,
        duration: 5000,
        color: 'danger'
      });
    }
    return await this.fingerAuth.verify() && await this.fingerAuth.verifyWithFallback();
  }
}
