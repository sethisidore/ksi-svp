import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 't',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'observe',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../observe/observe.module').then(m => m.ObservePageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../more/more.module').then(m => m.MorePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/t/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/t/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
