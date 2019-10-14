import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MenuController } from '@ionic/angular';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.page.html',
  styleUrls: ['./admin-auth.page.scss'],
})
export class AdminAuthPage implements OnInit {
  adminLoginForm: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z]{1}[a-zA-Z_@0-9]{2,18}/)]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.adminService.adminLogin(this.adminLoginForm.value).subscribe(() => {
      this.adminService.status = true;
    });
  }
}
