import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() { }
  checkUser() {
    if (this.authService.loginModel.valid) {
      this.login();
    } else {
      this.authService.presentToast("Credentials not Valid")
    }

  }
  login() {
    let userTemp = this.authService.loginModel.value;
    this.authService.login(userTemp);
  }
}
