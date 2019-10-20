import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  public adminPages = [
    { title: 'Login', url: '/admin', icon: 'lock' },
    { title: 'Schedule Election', url: '/admin/schedule', icon: 'clock' },
    { title: 'Manage Parties', url: '/admin/parties', icon: 'flag' },
    { title: 'Users', url: '/admin/users', icon: 'persons' },
    { title: 'Return to Main App', url: '/tabs/home', icon: 'home' }
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
