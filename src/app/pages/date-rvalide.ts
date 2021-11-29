import { Injectable } from "@angular/core";
import {FormGroup} from "@angular/forms"
import { Validator } from "@angular/forms";

@Injectable({providedIn:'root'})
export class DateRvalide implements Validator {
  validate(formGroup:FormGroup){
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
      mnthRSelected,
      jrRSelected,
      anRSelected,
    } = formGroup.value;
    const index = months.findIndex((element) => element.m === mnthRSelected);

    if (anRSelected==0){
      return null;
    }
    if (jrRSelected == 29 && mnthRSelected == months[1].m && anRSelected % 4 == 0) {

      return { dateRNonValide: true };
    }
    if (months[index]===undefined){
      return null;
    }
    if (months[index].j < jrRSelected) {
      return { dateRNonValide: true };
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
