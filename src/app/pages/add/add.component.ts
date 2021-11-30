import { AddService } from './../add.service';
import { DateRvalide } from './../date-rvalide';
import { Datevalide } from './../datevalide';
import { MntFormControl } from './../mnt-form-control';
import {  Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  jourSelected: number = 0;
  monthSelected: string = '';
  anneeSelected: number = 0;
  jRappelSelected: string;
  mRappelSelected: number;
  yRappelSelected: number;


  months: any[] = [
    { mi: '01', m: 'Janvier', j: 31 },
    { mi: '02', m: 'Février', j: 29 },
    { mi: '03', m: 'Mars', j: 31 },
    { mi: '04', m: 'Avril', j: 30 },
    { mi: '05', m: 'Mai', j: 31 },
    { mi: '06', m: 'Juin', j: 30 },
    { mi: '07', m: 'Juillet', j: 31 },
    { mi: '08', m: 'Août', j: 31 },
    { mi: '09', m: 'Septembre', j: 30 },
    { mi: '10', m: 'Octobre', j: 31 },
    { mi: '11', m: 'Novembre', j: 30 },
    { mi: '12', m: 'Decembre', j: 31 },
  ];
  jours: number[] = [];
  joursR: number[] = [];
  years: number[] = [];
  currentTime = new Date();
  authForm = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'),
      ]),
      
    },
    
  );
  constructor(
  ) { }
  ngOnInit() {

    
  }

  onClick() {

  
  }
  reset(){
    this.authForm.reset();
  }

}
