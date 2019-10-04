import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FaqPage } from './faq/faq.page';
import { BugReportPage } from './bug-report/bug-report.page';

@Component({
  selector: 'app-more',
  templateUrl: './more-tab.page.html',
  styleUrls: ['./more-tab.page.scss']
})
export class MoreTabPage {
  version: '1.0.18';
  build: '18';
  hash: '29H0wkh29dhU39aHIa03';
  constructor(
    private modalController: ModalController
  ) {}

  async faq() {
    const faqModal = await this.modalController.create({
      component: FaqPage
    });
    return await faqModal.present();
  }

  async bugReport() {
    const bugReportModal = await this.modalController.create({
      component: BugReportPage
    });
    return await bugReportModal.present();
  }
}
