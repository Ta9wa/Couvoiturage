import { TestComponent } from './test/test.component';
import { NavComponent } from './../shared/nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ProfilComponent } from './profil/profil.component';
import { SigninComponent } from '../auth/signin/signin.component';


@NgModule({

  declarations: [HomeComponent,AddComponent,ListComponent,TestComponent,ProfilComponent],
  imports: [CommonModule, PagesRoutingModule,SharedModule,ReactiveFormsModule!,FormsModule],

})
export class PagesModule {}
