import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from './../config'
import { Tokens } from './models/tokens';
import { Router } from '@angular/router';
interface signinCreadentials {
  emailId:String;
  password:String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
 isLogged = null;

  isLoggedin= new BehaviorSubject<boolean|null>(null);
  constructor(private http: HttpClient, private router:Router){

this.checkAuth().subscribe( (value) => {
this.isLoggedin.next(value);
})
  }
  ngOnInit () {

  }



  getUsername () {
      return this.http.get<String> (`${config.apiUrl}/getusername`,{responseType:'text' as 'json'}  );
}

login(signinCreadentials:signinCreadentials): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/authenticate`, signinCreadentials,{responseType:'text' as 'json'})
      .pipe(
        tap((tokens) => {  this.doLoginUser( tokens) ;
          document.location.reload();
       }),


        );
  }
  checkAuth(){
    return this.http.get<boolean>(`${config.apiUrl}/validate`);
  }





 doLoginUser( tokens: string) {

    this.storeTokens(tokens);
  }

  storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

storeTokens(tokens: string) {

    localStorage.setItem(this.JWT_TOKEN, tokens);

  }






//here you stop

 removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  private doLogoutUser() {
    this.removeTokens();
  }
   private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }
doLogout() {
  this.removeTokens();

  }





  refreshToken() {
    return this.http.post<any>(`${config.apiUrl}/refresh`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }



}
