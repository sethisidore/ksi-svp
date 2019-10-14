import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { Party } from '../voting-tab/voting.service';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl: string = `${SERVER_URL}/admin`;
  status: boolean;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) { }

  schedule(body: any): Observable<any> {
    return this.http.post<any>(`${this.adminUrl}/schedule`, body);
  }

  getParties(): Observable<Party[]> {
    return this.http.get<Party[]>(`${this.adminUrl}/parties`);
  }

  createParty(party: Party): Observable<Party> {
    return this.http.post<Party>(`${this.adminUrl}/parties`, party);
  }


  removeParty(id: Party['initials']): Observable<Party> {
    return this.http.delete<Party>(`${this.adminUrl}/parties/${id}`);
  }

  updateParty(party: Party) {
    return this.http.put<Party>(`${this.adminUrl}/parties/${party.initials}`, party);
  }

  adminLogin(credentials: { username: string, password: string }) {
    return this.http.post(`${this.adminUrl}/`, credentials);
  }

  adminLogout() {
    return this.http.get(`${this.adminUrl}/logout`).subscribe(() => this.status = false);
  }
}
