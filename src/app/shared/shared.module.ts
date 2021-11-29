import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ChequeShowComponent } from './cheque-show/cheque-show.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { RouterModule } from '@angular/router';
import { AuthInputComponent } from './auth-input/auth-input.component';
import { MenuPage } from './menu/menu.page';



@NgModule({
  declarations: [NavComponent,ChequeShowComponent,NavAuthComponent,AuthInputComponent],
  imports: [
    CommonModule,RouterModule,
    ReactiveFormsModule,
   FormsModule
  ],
  exports: [NavComponent,ChequeShowComponent,NavAuthComponent,AuthInputComponent]
})
export class SharedModule { }
