import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StorageService } from '../helpers';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: TokenPayload;
  authUrl = 'api/auth';

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }

  login(user: TokenPayload): Observable<TokenPayload> {
    return this.http.post<TokenPayload>(`${this.authUrl}/login`, user);
  }

  verifyOTP(otp: string): Observable<TokenPayload> {
    return this.http.post<TokenPayload>(`${this.authUrl}/otp`, otp);
  }

  logout() {
    return this.http.get(`${this.authUrl}/logout`).subscribe(() => {
      this.storage.removeItem('auth-token');
      delete this.token;
    });
  }

  async isLoggedIn(): Promise<boolean> {
    const voter: TokenPayload = await this.storage.getObject('auth-token');
    return (voter && voter.expires > (Date.now() / 1000)) ? true : false;
  }
}

export interface TokenPayload {
  id: string;
  expires: number;
  vin: string;
}
