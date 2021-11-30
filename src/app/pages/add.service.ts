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
  
 
  constructor(private http:HttpClient) {

}
  

  
}
