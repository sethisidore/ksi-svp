import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit() {
    this.otpForm = this.fb.group({
      otpCode: ['', Validators.required]
    });
  }

  onSubmit() {
    this.auth.verifyOTP(this.otpForm.value);
  }

  refreshOTP() {
    this.auth.resendOTP();
  }
}
