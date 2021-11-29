import { MenuController } from '@ionic/angular';
import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
@Input() title:string="";
@Input() user: string="";
@Input() welcome:string="";
  constructor(private router:Router,private menu :MenuController) { }

  ngOnInit() {}

}
