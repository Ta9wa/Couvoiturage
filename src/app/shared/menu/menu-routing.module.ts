import { HomeComponent } from './../../pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { AddComponent } from 'src/app/pages/add/add.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
    {
      path: '',
      loadChildren: () =>
        import('../../pages/pages.module').then((m) => m.PagesModule),

    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
