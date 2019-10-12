import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.page.html',
  styleUrls: ['./user-tab.page.scss'],
})
export class UserTabPage implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    return this.auth.logout();
  }
}
