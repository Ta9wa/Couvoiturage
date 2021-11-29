import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
})
export class AuthInputComponent implements OnInit {
@Input() form :FormGroup; 
  @Input() control:FormControl;
@Input() type:String;
@Input() placeholder:String;
@Input() field:String;
@Input () icon :String;
  constructor() { }

  ngOnInit() {}

}
