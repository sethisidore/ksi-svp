import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VotingTabPage } from './voting-tab.page';
import { CastBallotPage } from './cast-ballot/cast-ballot.page';
import { ElectionsPage } from './elections/elections.page';

const routes: Routes = [
  { path: '', component: VotingTabPage },
  {
    path: 'elections', children: [
      { path: ':id', component: ElectionsPage },
      { path: 'cast/:id', component: CastBallotPage },
      { path: 'audit' }
    ]
  }
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VotingTabPage, CastBallotPage, ElectionsPage]
})
export class VotingTabPageModule { }
