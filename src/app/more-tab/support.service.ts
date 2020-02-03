import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  supportUrl: string = `${SERVER_URL}/support`

  constructor(
    private http: HttpClient
  ) { }

  getFAQs(): Observable<[]> {
    return this.http.get<[]>(`${this.supportUrl}/faqs`);
  }

  reportBugsOrErrors(bugs: BugType) {
    return this.http.post(`${this.supportUrl}/bugs`, bugs);
  }
}

interface BugType {
  email: string;
  subject: string;
  desc: string;
}
