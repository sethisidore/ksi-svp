import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';

import { AuthService } from '../auth.service';
import { OtpPage } from '../otp/otp.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      vin: ['A51W-G1P7-29175082', Validators.pattern(/[A-Z1-9]{4}\[1-9A-Z]{4}\-[0-9]{8}/), Validators.required],
      contact: ['+234 80 234 31392', Validators.required]
    });
  }

  dismissLogin() {
    this.modalController.dismiss();
  }

  async verifyOTP() {
    this.dismissLogin();
    const otpModal = await this.modalController.create({
      component: OtpPage
    });
    return await otpModal.present();
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe(() => {
      this.nav.navigateRoot('/otp');
    });
  }
}
