import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'add',component:AddComponent},
{path:'list',component:ListComponent},
{path:'test',component:TestComponent},
{path:'profil',component:ProfilComponent}]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
