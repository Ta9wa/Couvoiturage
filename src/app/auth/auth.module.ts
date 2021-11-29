import { TokenInterceptor } from './token.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [SigninComponent,SignupComponent],
  providers:[
    AuthGuard,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    SharedModule,

  ]
})
export class AuthModule { }
