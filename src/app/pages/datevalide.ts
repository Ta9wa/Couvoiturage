import { element } from 'protractor';
import { AddComponent } from './add/add.component';
import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class Datevalide implements Validator {
  validate(formGroup: FormGroup) {
    let months: any[] = [
      { m: 'Janvier', j: 31 },
      { m: 'Février', j: 29 },
      { m: 'Mars', j: 31 },
      { m: 'Avril', j: 30 },
      { m: 'Mai', j: 31 },
      { m: 'Juin', j: 30 },
      { m: 'Juillet', j: 31 },
      { m: 'Août', j: 31 },
      { m: 'Septembre', j: 30 },
      { m: 'Octobre', j: 31 },
      { m: 'Novembre', j: 30 },
      { m: 'Decembre', j: 31 },
      { m: '', j: 31 },
    ];
    const {
      mnthSelected,
      jrSelected,
      anSelected,

    } = formGroup.value;
    const index = months.findIndex((element) => element.m === mnthSelected);

    if (anSelected==0){
      return null;
    }
    if (jrSelected == 29 && mnthSelected == months[1].m && anSelected % 4 == 0) {

      return { dateNonValide: true };
    }
      if (months[index] === undefined) {
        return null;
      }
    if (months[index].j < jrSelected) {
      return { dateNonValide: true };
    }
    {

      return null;
    }
  }
  annBessel(ann: number) {
    if (ann % 4 == 0) {
      return true;
    }
    return false;
  }
}
