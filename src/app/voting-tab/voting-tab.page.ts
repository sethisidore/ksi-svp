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

  Options: Array<{ type: string, code: string }> = [
    { type: 'Presidential', code: 'presidential' },
    { type: 'Senatorial', code: 'senatorial' },
    { type: 'House of Representatives', code: 'HOR' }, 
    { type: 'Governorship', code: 'gubernatorial'},
    { type: 'House of Assemblies', code: 'HOA' },
    { type: 'Local Government', code: 'LG' },
  ];

  constructor() { }

}
