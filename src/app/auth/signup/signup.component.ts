import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor() { }
 authForm = new FormGroup({
   username: new FormControl('',Validators.required),
   password: new FormControl('',Validators.required),
   passwordConfirmation: new FormControl('',Validators.required),
   emailId: new FormControl('',Validators.required),
   name: new FormControl('',Validators.required)
 })
  ngOnInit() {}

}
