import { NavigationEnd, Router } from '@angular/router';
import { AddService } from './../add.service';
import { AfterContentInit, Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{
  ListChList:any[]=[];
  constructor(private addService: AddService, private router: Router) {

    this.router.events.pipe(filter (event => event instanceof NavigationEnd)).subscribe(val=>{
      if (val instanceof NavigationEnd)
      if ((val.url != "/signin" )&& (val.url !="/signup" ))
        this.ngOnInit();
      })
  }


  onClick() {
    this.router.navigateByUrl('/home/add');
  }

  ngOnInit() {

    this.addService.getCheque().subscribe({next: (listCheque)=>
      {this.ListChList=listCheque;

     }})
  }




}
