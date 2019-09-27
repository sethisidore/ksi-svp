import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';

import { AuthService } from './auth.service';
import { OtpPage } from './otp/otp.page';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private auth: AuthService,
    private modalController: ModalController,
    private menu: MenuController,
    private nav: NavController
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.auth.isLoggedIn()) {
      this.nav.navigateRoot('/voting');
    }
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }

  async verifyOTP() {
    const otpModal = await this.modalController.create({
      component: OtpPage
    });
    return await otpModal.present();
  }
}
