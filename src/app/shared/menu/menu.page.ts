import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  username :String;
  haveImage:boolean;
  constructor(private router: Router,private authService:AuthService,private httpClient:HttpClient) {


        this.authService.getUsername().subscribe(
       (result) =>{

          this.username=result;



          });
 this.getImage();
        }





  ngOnInit() {
  }


  logoutRouter(){
    this.authService.removeTokens();
    this.router.navigateByUrl("/home")
  }
  changeRouter(){
    this.router.navigateByUrl('/home/add')


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
          this.retrievedImage="assets\default-user-image.png"
          this.haveImage= false;
        }
      }
      );
  }
  pages = [

    {
      title:"Accueil",
      url: '/home',
      icon:'home-outline'
    },

    {
      title:"Postuler",
      icon:'add',
      url:'/home/add'
       },

    {
      title:"Profil",
      icon:'arrow-forward-outline',
      url:'/home/profil'
        },
   
    
      {title:"Se déconnecter",
      icon:'log-out-outline',
      doLogout: () => {
      this.authService.isLoggedin.next(false);
        this.authService.doLogout();

      },
url:'/signin'}
  ]
}
