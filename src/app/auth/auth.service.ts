import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '../helpers';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: TokenPayload;
  authUrl = 'api/auth';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: StorageService) { }

  login(user: TokenPayload): Observable<TokenPayload> {
    return this.http.post<TokenPayload>(`${this.authUrl}/login`, user);
  }

  verifyOTP(otp: string) {
    this.http.post<TokenPayload>(`${this.authUrl}/otp`, otp).subscribe(resp => {
      this.storage.setObject('auth-token', resp).then(() => {
        this.router.navigate(['/voting']);
      });
    });
  }

  resendOTP() {}

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
}

export interface TokenPayload {
  id: string;
  expires: number;
  vin: string;
}
