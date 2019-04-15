import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
  ) {
    this.menuCtrl.enable(false);
  }
  ngOnInit() { }



  checkData() {
    if(this.authService.user.valid){
      this.signUp();
    }else{
      console.log("Not Valid");
      
    }
  }

  signUp() {
    let signUpData = this.authService.user.value;
    this.authService.signUp(signUpData);
  }

}

