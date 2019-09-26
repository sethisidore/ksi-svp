import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 't',
    component: TabsPage,
    children: [
      {
        path: 'voting',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../voting-tab/voting-tab.module').then(m => m.VotingTabPageModule)
          }
        ]
      },
      {
        path: 'observe',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../observe-tab/observe-tab.module').then(m => m.ObserveTabPageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../more-tab/more-tab.module').then(m => m.MoreTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/t/observe',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/t/observe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
