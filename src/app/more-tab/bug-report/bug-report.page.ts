import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService } from 'src/app/helpers';
import { SupportService } from '../support.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.page.html',
  styleUrls: ['./bug-report.page.scss'],
})
export class BugReportPage implements OnInit {
  bugReportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private supportService: SupportService
  ) { }

  ngOnInit() {
    this.bugReportForm = this.fb.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  onSubmit() {
    this.supportService.reportBugsOrErrors(this.bugReportForm.value).subscribe((resp: string) => {
      this.alertService.presentToast(resp);
    });
  }
}
