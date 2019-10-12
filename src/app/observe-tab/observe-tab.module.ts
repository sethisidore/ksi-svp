import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ObserveTabPage } from './observe-tab.page';

const routes: Routes = [
  {
    path: '', component: ObserveTabPage, children: [
      {
        path: ':id'
      }
    ]
  }
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ObserveTabPage }])
  ],
  declarations: [ObserveTabPage]
})
export class ObserveTabPageModule {}
