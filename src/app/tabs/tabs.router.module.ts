import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: () => import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule) },
      {
        path: 'voting',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            // canActivateChild: [AuthGuard],
            loadChildren: () => import('../voting-tab/voting-tab.module').then(m => m.VotingTabPageModule)
          }
        ]
      },
      {
        path: 'observe',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            // canActivateChild: [AuthGuard],
            loadChildren: () => import('../observe-tab/observe-tab.module').then(m => m.ObserveTabPageModule)
          }
        ]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () => import('../more-tab/more-tab.module').then(m => m.MoreTabPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-tab/user-tab.module').then(m => m.UserTabPageModule)
          }
        ]
     },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
