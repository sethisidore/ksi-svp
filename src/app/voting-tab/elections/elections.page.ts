import { Component, OnInit } from '@angular/core';

import { VotingService } from '../voting.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.page.html',
  styleUrls: ['./elections.page.scss'],
})
export class ElectionsPage implements OnInit {
  elections: Array<{
    location: string,
    type: string
  }>;
  errors: string;

  constructor(private votingService: VotingService) { }

  ngOnInit() {
    this.votingService.requestAvailableElections('presidential').subscribe(resp => {
      this.elections = resp;
    });
  }

}
