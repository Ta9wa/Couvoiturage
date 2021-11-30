import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

import { ProfilComponent } from './profil/profil.component';
import {DashboardComponent} from './dashbord/dashboard/dashboard.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'add',component:AddComponent},

{path:'test',component:TestComponent},
{path:'profil',component:ProfilComponent},
{path:'dashboard',component:DashboardComponent}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
