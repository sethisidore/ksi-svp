import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../helpers';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: TokenPayload;
  authUrl = 'localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService) { }

  login(user: TokenPayload): Observable<TokenPayload> {
    return this.http.post<TokenPayload>(`${this.authUrl}/login`, user);
  }

  verifyOTP(otp: string) {
    return this.http.post<TokenPayload>(`${this.authUrl}/otp`, otp).subscribe(resp => {
      this.storage.setObject('auth-token', resp).then(() => {
        this.router.navigate(['/tabs/voting']);
      });
    });
  }

  resendOTP() {
    return this.http.get(`${this.authUrl}/resend`);
  }

  logout() {
    return this.http.get(`${this.authUrl}/logout`).subscribe(() => {
      this.storage.removeItem('auth-token');
      delete this.token;
    });
  }

  async isLoggedIn(): Promise<boolean> {
    this.token = await this.storage.getObject('auth-token');
    return (this.token && this.token.expires > (Date.now() / 1000)) ? true : false;
  }

  register(body: RegisterType) {
    return this.http.post<RegisterType>(`${this.authUrl}/register`, body);
  }
}

export interface TokenPayload {
  id: string;
  expires: number;
  vin: string;
  regWard: string;
}

export interface RegisterType {
  vin: string;
  username: string;
  email: string;
  contact: string;
  password: string;
  confirmPassword: string;
}