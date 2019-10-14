import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlertService } from '../helpers';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  votingUrl: string = `${SERVER_URL}/voting`;

  constructor(
    private alertService: AlertService,
    private http: HttpClient) { }

  requestAvailableElections(type: ElectionRequestOptions['type']): Observable<[]> {
    return this.http.get<[]>(`${this.votingUrl}/${type}`);
  }

  requestBallot(id: string): Observable<BallotBox> {
    return this.http.get<BallotBox>(`${this.votingUrl}/request/${id}`);
  }

  castBallot(ballot: Ballot) {
    return this.http.post<Ballot>(`${this.votingUrl}/vote`, ballot);
  }

  encryptBallot (value: any) {
    return value;
  }
}

export interface ElectionRequestOptions {
  type: 'presidential' | 'gubernatorial' | 'senatorial' | 'HOR' | 'HOA' | 'LG';
};

export interface Ballot {
  choice: Party['initials'];
};

export interface Party {
  initials: string;
  name: string;
  logo: string;
  restrictions?: Array<string>;
};

export interface BallotBox {
  ballot: Ballot;
  parties: Array<Party>;
}