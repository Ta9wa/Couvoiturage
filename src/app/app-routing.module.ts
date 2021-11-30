import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninGuard } from './auth/signin.guard';
 


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./shared/menu/menu.module').then( m => m.MenuPageModule),

  },

  {
    path:'',
    loadChildren: () =>
    import ('./auth/auth.module').then((m)=> m.AuthModule),


  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
