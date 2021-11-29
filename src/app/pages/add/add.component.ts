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
      montant: new MntFormControl('', [Validators.required]),
      mnthSelected: new FormControl('', [Validators.required]),
      jrSelected: new FormControl('', [Validators.required]),
      anSelected: new FormControl('', [Validators.required]),
      mnthRSelected: new FormControl('', [Validators.required]),
      jrRSelected: new FormControl('', [Validators.required]),
      anRSelected: new FormControl('', [Validators.required]),
    },
    {
      validators: [this.dateRValide.validate, this.dateValide.validate],
    }
  );
  constructor(
    private dateValide: Datevalide,
    private dateRValide: DateRvalide,
    private addService: AddService
  ) { }
  ngOnInit() {

    for (let i = 1; i < 32; i++) {
      this.jours.push(i);
    }
    if (this.monthSelected === 'Janvier')
      for (let i = 1; i <= 31; i++) {
        this.jours.push(i);
      }
    if (!this.mRappelSelected) {
      for (let i = 1; i <= 31; i++) {
        this.joursR.push(i);
      }
    }
    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i < currentYear + 100; i++) {
      this.years.push(i);
    }
  }

  onchangeM(m) {
    this.monthSelected = m;
    this.jours = [];
    let JJmax = this.months.findIndex(
      (element) => element.m == this.monthSelected
    );
    if (this.months[JJmax] !== undefined)
      for (let i = 1; i <= this.months[JJmax].j; i++) {
        this.jours.push(i);
      }
    this.authForm.patchValue({ mnthSelected: this.monthSelected });
  }

  onchangeJ(j) {
    this.jourSelected = j;
    this.authForm.patchValue({ jrSelected: this.jourSelected });
  }
  onchangeY(y) {
    this.anneeSelected = y;
    this.authForm.patchValue({ anSelected: this.anneeSelected });
  }
  onchangeMR(m) {
    this.mRappelSelected = m;
    this.joursR = [];
    let JJmax = this.months.findIndex(
      (element) => element.m == this.mRappelSelected
    );
    if (this.months[JJmax] !== undefined)
      for (let i = 1; i <= this.months[JJmax].j; i++) {
        this.joursR.push(i);
      }
    this.authForm.patchValue({ mnthRSelected: this.mRappelSelected });
  }
  onchangeJR(j) {
    this.jRappelSelected = j;
    this.authForm.patchValue({ jrRSelected: this.jRappelSelected });
  }
  onchangeYR(y) {
    this.yRappelSelected = y;
    this.authForm.patchValue({ anRSelected: this.yRappelSelected });
  }
  onClick() {

    this.addService.addCheque({
      reciver: this.authForm.get('username').value,
      montant: this.authForm.get('montant').value,
      dateLim:this.anneeSelected+
      '-'+
        this.months[
          this.months.findIndex((element) => element.m === this.monthSelected)
        ].mi +
        '-' +
        this.jourSelected ,

        dateRapp: this.yRappelSelected +   '-'+
          this.months[this.months.findIndex((element) => element.m === this.mRappelSelected)
        ].mi  +
        '-' +
        this.jRappelSelected


    }).subscribe();




  }
  reset(){
    this.authForm.reset();
  }

}
