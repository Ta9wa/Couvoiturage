import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MenuPage } from 'src/app/shared/menu/menu.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
 private username:String;
 selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  showUpdatePhoto:boolean=false;
  haveImage:boolean;
  retrivedUsername:string;
  constructor( private authService:AuthService,private router: Router,private httpClient:HttpClient,private menuPage:MenuPage) {

        this.authService.getUsername().subscribe( {
          next: (result) =>{

          this.username=result;
      let array = this.username.split(" ");
      let firstLetter= array[0].charAt(0);
      let secondLetter= "b";
      this.retrivedUsername=firstLetter + "."+secondLetter;
      },
          error:(err) => {
            console.log (err);

          }

          });
          this.getImage();

        }

  ngOnInit() {}
  doLogout(){
    this.authService.isLoggedin.next(false);
   this.authService.doLogout();
   this.router.navigateByUrl("/signin")
  }
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8967/image/get' )
      .subscribe({next:
        res => { if (res==null){return;}
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
         this.haveImage= true;
        },
        error: err=> {
          this.haveImage= false;
        }
      }
      );
  }
  updatePhoto(){

    this.showUpdatePhoto=!this.showUpdatePhoto;
  }
}


