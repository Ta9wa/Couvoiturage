import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  isLogged= false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree   {
      this.authService.isLoggedin.pipe(skipWhile ((value)=>{return value ==null;})
 ,take(1),
 tap((authenticated)=>{

 if (!authenticated)
this.router.navigateByUrl("/signin")})  )
  if (this.authService.isLoggedin.value)
{   this.router.navigateByUrl("/home")
  return false;}
  else return true;
        }


}
