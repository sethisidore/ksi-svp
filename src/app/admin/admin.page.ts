import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  public adminPages = [
    { title: 'Schedule Election', url: 'schedule', icon: 'calender' },
    { title: 'Manage Parties', url: 'parties', icon: 'flag' },
    { title: 'Return to Main App', url: '/tabs/home', icon: 'home' },
    { title: 'Login', url: '/admin', icon: 'lock' }
  ];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }
  
  logout() {
    return this.adminService.adminLogout();
  }
}
