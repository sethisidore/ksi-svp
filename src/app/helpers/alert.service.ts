import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  toast: HTMLIonToastElement;

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(message: string) {
    this.toast = await this.toastController.create({
      message,
      color: 'dark',
      duration: 2000,
      position: 'top',
      showCloseButton: true,
      animated: true,
    });

    this.toast.present();
  }

  async presentToastWithOptions(toastOpts: ToastOptions) {
    this.toast = await this.toastController.create(toastOpts);
    this.toast.present();
  }
}
