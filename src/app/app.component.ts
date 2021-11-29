
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ThisReceiver } from '@angular/compiler';
import { delay, skipWhile, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username :String;
  constructor(private router: Router,private authService:AuthService) {


  
 this.authService.checkAuth().subscribe(()=>{});
}

  ngOnInit(): void {


  }



}

