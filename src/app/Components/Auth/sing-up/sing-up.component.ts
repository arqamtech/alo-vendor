import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
})
export class SingUpComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
  ) {
    this.menuCtrl.enable(false);
  }
  ngOnInit() { }

}
