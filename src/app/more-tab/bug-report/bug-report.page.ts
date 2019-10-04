import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from 'src/app/helpers';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.page.html',
  styleUrls: ['./bug-report.page.scss'],
})
export class BugReportPage implements OnInit {
  bugReportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private alertService: AlertService,
    // private supportService: SupportService
  ) { }

  ngOnInit() {
    this.bugReportForm = this.fb.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  onSubmit() {/*
    this.supportService.sendReport(this.bugReportForm.value).suscribe((resp: string) => {
      this.alertService.presentToast(resp);
    });
  */}

}
