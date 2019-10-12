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
  version: string = '1.0.4';
  build: number = 18;
  hash: string = '29H0wMZ29dhU39aHIa03';
  toggle: number = 0;

  constructor(
    private modalController: ModalController
  ) { }

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

  toggleAdmin() {
    if (this.toggle < 15) {
      return this.toggle += 1;
    } else { return; }
  }
}
