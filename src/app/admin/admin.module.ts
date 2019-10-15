import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminPage } from './admin.page';
import { AdminAuthPage } from './admin-auth/admin-auth.page';
import { ListPartiesPage } from './list-parties/list-parties.page';
import { ManagePartiesPage } from './manage-parties/manage-parties.page';

const routes: Routes = [
  {
    path: '', component: AdminPage, children: [
      { path: '', component: AdminAuthPage },
      { path: 'parties', component: ListPartiesPage },
      { path: 'schedule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminPage, AdminAuthPage, ListPartiesPage, ManagePartiesPage],
  entryComponents: [ManagePartiesPage]
})
export class AdminPageModule { }
