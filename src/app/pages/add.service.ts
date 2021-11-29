import { config } from './../config';
import { HttpClient } from '@angular/common/http';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';


interface Cheque{
  reciver:String ;
  montant:number;
  dateLim:String;
  dateRapp: String;
}
@Injectable({
  providedIn: 'root',
})
export class AddService {
  ListCh: Cheque[] = [];
 ListChTrier:Cheque[] = [];
 ListChHome: Cheque []= [];
  months: any[] = [
    { mi: '01', m: 'Janvier', j: 31 },
    { mi: '02', m: 'Février', j: 29 },
    { mi: '03', m: 'Mars', j: 31 },
    { mi: '04', m: 'Avril', j: 30 },
    { mi: '05', m: 'Mai', j: 31 },
    { mi: '06', m: 'Juin', j: 30 },
    { mi: '07', m: 'Juillet', j: 31 },
    { mi: '08', m: 'Août', j: 31 },
    {   mi: '09', m: 'Septembre', j: 30 },
    { mi: '10', m: 'Octobre', j: 31 },
    { mi: '11', m: 'Novembre', j: 30 },
    { mi: '12', m: 'Decembre', j: 31 },
  ];
  constructor(private http:HttpClient) {

}
    deleteChequeWithId (index:number){
      return this.http.delete (`${config.apiUrl}/cheque/delete?cheque_id=`+index)
    }
  addCheque (chequeCreadentials:Cheque) {
    return this.http.post<Cheque>(`${config.apiUrl}/cheque`,chequeCreadentials)
  }
  getCheque (){
   return this.http.get<Cheque[]>(`${config.apiUrl}/getcheques`)
  }

  /*postChequeTri() {
    this.ListChHome=[];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    console.log (yyyy + "-"+mm+"-"+ dd)
    let currentDate: string = yyyy + '-' + mm + '-' + dd;
 var ChTri = [...this.ListCh];
     this.ListChTrier= ChTri;
     for (let i=0;i<this.ListChTrier.length;i++){
       if (!(this.compareDate(JSON.stringify(ChTri[i].dateLim),currentDate))) {
         this.ListChHome.push(ChTri[i]);
       }
     }


  }


  compareDate(date1: string, date2: string) {
    let array1 = date1.split ('-');
    let array2= date2.split ('-');
    let yy1 = parseInt(array1[0]);
    let mm1 = parseInt(array1[1]);
    let  jj1= parseInt(array1[2]);
    let yy2  = parseInt(array2[0]);
    let  mm2 = parseInt(array2[1]);
    let jj2 = parseInt(array2[2]);
    if (yy2 > yy1) {
      return true;
    } else if (mm2 > mm1 && yy2 === yy1) {
      return true;
    } else if (jj2 > jj1 && mm2 === mm1 && yy2 === yy1) {
      return true;
    }
    return false;
  }*/
}
