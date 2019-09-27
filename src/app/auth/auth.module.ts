import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { LoginPage } from './login/login.page';
import { OtpPage } from './otp/otp.page';

const routes: Routes = [
  { path: 'welcome', component: AuthPage },
  { path: 'login', component: LoginPage },
  { path: 'otp', component: OtpPage }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage, LoginPage, OtpPage]
})
export class AuthPageModule {}
