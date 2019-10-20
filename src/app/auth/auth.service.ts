import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../helpers';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: TokenPayload;
  authUrl = `${SERVER_URL}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService) { }

  login(user: { username: string, password: string}) {
    this.storage.setObject('temp-user', user).then(() => {});
    return this.http.post(`${this.authUrl}/login`, user);
  }

  verifyOTP(otp: string) {
    let user: {username: string, password: string, otp: string|undefined};
    this.storage.getObject('temp-user').then(resp => {
      user = resp;
      user.otp = otp;
    });

    return this.http.post<TokenPayload>(`${this.authUrl}/otp`, user).subscribe(resp => {
      this.storage.setObject('auth-token', resp).then(() => {
        this.storage.removeItem('temp-user').then(() => this.router.navigate(['/tabs/voting']));
      });
    });
  }

  resendOTP() {
    return this.http.get(`${this.authUrl}/resend`);
  }

  logout() {
    return this.http.get(`${this.authUrl}/logout`).subscribe(() => {
      this.storage.removeItem('auth-token').then(() => delete this.token);
    });
  }

  async isLoggedIn(): Promise<boolean> {
    this.token = await this.storage.getObject('auth-token');
    return (this.token && this.token.expires > (Date.now() / 1000)) ? true : false;
  }

  register(body: RegisterType) {
    return this.http.post(`${this.authUrl}/register`, body);
  }
}

export interface TokenPayload {
  id: string;
  expires: number;
  username: string;
  regWard?: string;
}

export interface RegisterType {
  vin: string;
  username: string;
  contact: string;
  password: string;
  confirmPassword: string;
}