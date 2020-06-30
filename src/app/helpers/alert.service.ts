import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions, ToastButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'dark',
      duration: 2000,
      position: 'top',
      buttons: ['Cancel'],
      animated: true,
    });

    toast.present();
  }

  async presentToastWithOptions(toastOpts: ToastOptions) {
    const toast = await this.toastController.create(toastOpts);
    toast.present();
  }
}
