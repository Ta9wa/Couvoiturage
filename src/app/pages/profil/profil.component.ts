import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuPage } from 'src/app/shared/menu/menu.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
 
  constructor( private router: Router) {

       

         

        }

  ngOnInit() {}
  doLogout(){
   
   this.router.navigateByUrl("/signin")
  }
  getImage() {
    
  }
 
}


