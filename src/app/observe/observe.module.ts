import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ObservePage } from './observe.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ObservePage }])
  ],
  declarations: [ObservePage]
})
export class ObservePageModule {}
