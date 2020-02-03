import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlertService, StorageService } from '../helpers';
import { SERVER_URL } from 'src/environments/environment';

const crypto = window.crypto;


@Injectable({
  providedIn: 'root'
})
export class VotingService {
  votingUrl: string = `${SERVER_URL}/voting`;

  constructor(
    private alertService: AlertService,
    private http: HttpClient,
    private storage: StorageService
    ) { }

  requestAvailableElections(type: ElectionRequestOptions['type']): Observable<[]> {
    return this.http.get<[]>(`${this.votingUrl}/${type}`);
  }

  requestBallot(id: string): Observable<BallotBox> {
    return this.http.get<BallotBox>(`${this.votingUrl}/request/${id}`);
  }

  castBallot(ballot: Ballot) {
    return this.http.post<Ballot>(`${this.votingUrl}/vote`, ballot);
  }

  async encryptBallot (dataToSign: any) {
    const pvKey = await this.generateRSAKeys()
    const signature = await crypto.subtle.sign(
      { name: 'RSASSA-PKCS1-v1_5', saltLength: 128 },
      pvKey,
      dataToSign
    );
    return new Uint8Array(signature);
  }

  async generateRSAKeys() {
    let keys: CryptoKeyPair;

    keys = await this.storage.getObject('API_KEYS');
    if (keys) {
      return keys.privateKey;
    }
    keys = await crypto.subtle.generateKey({
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: 'SHA-256' }
    },
    true,
    ["sign", "verify"]
    );
    return keys.privateKey;
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
  publicKey: string;
}