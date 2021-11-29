import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {





  }
  authForm = new FormGroup(
    {


      emailId: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required]),


    },

  );
  ngOnInit() {

  }
  onSubmit (){

  }

  login() {

    this.authService.login(
      {
        emailId: this.authForm.get('emailId').value,
        password: this.authForm.get('password').value
      }
    )
    .subscribe( {
    next: (value) =>{
      console.log ("should work")
    this.router.navigateByUrl('/home')},
    error:(err) => {
      console.log (err);

    }

    });
  }


}
