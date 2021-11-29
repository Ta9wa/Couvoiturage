import { ListComponent } from './../../pages/list/list.component';
import { AddService } from './../../pages/add.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cheque-show',
  templateUrl: './cheque-show.component.html',
  styleUrls: ['./cheque-show.component.scss'],
})
export class ChequeShowComponent implements OnInit {
  @Input() username: string;
  @Input() montant: number;
 @Input() cheque_id: number;
 @Input () index:number;
  constructor(private addService: AddService,private listComponent:ListComponent) {

  }
  mypopCheque (cheque_id: number,index:number) {
    console.log (index)
    this.listComponent.ListChList.splice(index,1);
console.log (this.listComponent.ListChList);
    return this.addService.deleteChequeWithId(cheque_id).subscribe()
 }
  ngOnInit() {}
}
