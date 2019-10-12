import { Component } from '@angular/core';

@Component({
  selector: 'app-observe',
  templateUrl: './observe-tab.page.html',
  styleUrls: ['./observe-tab.page.scss']
})
export class ObserveTabPage {
  Options: Array<{ type: string, code: string }> = [
    { type: 'Presidential', code: 'presidential' },
    { type: 'Senatorial', code: 'senatorial' },
    { type: 'House of Representatives', code: 'HOR' }, 
    { type: 'Governorship', code: 'gubernatorial'},
    { type: 'House of Assemblies', code: 'HOA' },
    { type: 'Local Government', code: 'LG' },
  ];

  constructor() {}

}
