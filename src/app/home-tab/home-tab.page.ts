import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  status: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.isLoggedIn().then((status) => {
      this.status = status;
    });
  }

}
