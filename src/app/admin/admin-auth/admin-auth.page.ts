import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { AdminService } from '../admin.service';
import { StorageService } from 'src/app/helpers';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.page.html',
  styleUrls: ['./admin-auth.page.scss'],
})
export class AdminAuthPage implements OnInit {
  adminLoginForm: FormGroup;

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/[A-Za-z]{1}[A-Za-z0-9_]{2,50}/)]],
      password: ['', [Validators.required, Validators.pattern(/[A-Za-z0-9_#*&%@()!$*]{10,100}/)]],
    });
  }

  onSubmit() {
    this.adminService.adminLogin(this.adminLoginForm.value).subscribe((resp) => {
      this.adminService.status = true;
      this.storage.setObject('adtk', resp);
    });
  }
}
