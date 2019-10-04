import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  status: boolean;

  constructor(public auth: AuthService) {
    this.auth.isLoggedIn().then(resp => this.status = resp);
  }

}
