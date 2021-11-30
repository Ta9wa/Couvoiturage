import { filter } from 'rxjs/operators';
import { AuthService } from './../../auth/auth.service';
import { MenuController } from '@ionic/angular';
import { AddService } from './../add.service';
import { Component, OnInit,Input  } from '@angular/core';
import {Router,Event, NavigationEnd, NavigationStart, RouterEvent, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  constructor(
    private router: Router,
     ) {



    


        

this.router.events.pipe(filter (event => event instanceof NavigationEnd)).subscribe(val=>{
if (val instanceof NavigationEnd)
if ((val.url != "/signin" ) && (val.url !="/signup" ))
  this.ngOnInit();
})
  }

  ngOnInit() {

   

    }


  OnaddClick() {
    this.router.navigateByUrl('/home/add');
  }
  onList() {
    this.router.navigateByUrl('/home/list');
  }

}
