import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { OtpPage } from './otp/otp.page';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  { path: 'login', component: AuthPage },
  { path: 'otp', component: OtpPage },
  { path: 'register', component: RegisterPage }

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage, OtpPage, RegisterPage]
})
export class AuthPageModule {}
