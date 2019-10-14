import { IonicModule } from '@ionic/angular';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MoreTabPage } from './more-tab.page';
import { BugReportPage } from './bug-report/bug-report.page';
import { FaqPage } from './faq/faq.page';

const routes: Route[] = [
  { path: '', component: MoreTabPage, },
  { path: 'faqs', component: FaqPage },
  { path: 'bugs', component: BugReportPage }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MoreTabPage,
    FaqPage,
    BugReportPage
  ]
})
export class MoreTabPageModule {}
