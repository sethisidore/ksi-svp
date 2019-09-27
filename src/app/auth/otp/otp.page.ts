import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  otpForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.otpForm = this.fb.group({
      otpCode: ['', Validators.required]
    });
  }

  dismissOTP() {
    this.modalController.dismiss();
  }

  onSubmit() {
    this.auth.login(this.otpForm.value).subscribe(() => {
      this.nav.navigateRoot('/vote');
    });
  }
}
