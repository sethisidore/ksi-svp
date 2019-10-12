import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private menu: MenuController,
    private router: Router
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      vin: ['', [Validators.pattern(/[A-Z0-9]{8}[0-9]{10}/), Validators.required]],
      contact: ['', Validators.required]
    });
  }

  ionViewWillEnter() {
    let status: boolean;
    this.auth.isLoggedIn().then(resp => status = resp);
    if (status === true) {
      this.router.navigate(['/tabs/voting']);
    }
  }

  onSubmit() {
    return this.auth.login(this.loginForm.value).subscribe(() => {
      this.router.navigate(['/otp']);
    });
  }
}
