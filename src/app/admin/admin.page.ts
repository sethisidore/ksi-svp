import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  public adminPages = [
    { title: 'Schedule Election', url: 'schedule', icon: 'clock' },
    { title: 'Manage Parties', url: 'parties', icon: 'flag' },
    { title: 'Return to Main App', url: '/tabs/home', icon: 'home' },
    { title: 'Login', url: '/admin', icon: 'lock' }
  ];

  status: boolean;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.status = this.adminService.status;
  }
  
  logout() {
    return this.adminService.adminLogout();
  }
}
