import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting-tab.page.html',
  styleUrls: ['./voting-tab.page.scss']
})
export class VotingTabPage {
  votedStatus: {
    PRES: boolean;
    SEN: boolean;
    HOR: boolean;
    GUB: boolean;
    HOA: boolean;
    LG: boolean;
  };

  Options: Array<string> = [
    'Presidential', 'Senatorial', 'House of Reps', 'Governorship',
    'House of Assemblies', 'Local Government', 'Verify/Audit'
  ];

  constructor() { }

}
