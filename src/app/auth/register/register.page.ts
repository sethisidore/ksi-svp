import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      vin: ['', [Validators.required, Validators.pattern(/[A-Z0-9]{8}[0-9]{12}/)]],
      contact: ['', [Validators.required, Validators.pattern(/\+234(([7-9]0)|81)([1-7]|9)[0-9]{7}/)]],
      username: ['', [Validators.required, Validators.pattern(/[A-Za-z][A-za-Z0-9_]{2,50}/)]],
      password: ['', [Validators.required, Validators.pattern(/[a-ZA-z0-9_#*&%@()!$*]{4,100}/)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    return this.auth.register(this.registerForm.value).subscribe((resp) => {
      this.router.navigate(['/otp']);
    });
  }

}
