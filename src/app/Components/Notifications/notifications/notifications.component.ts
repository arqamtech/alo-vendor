import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {

  constructor(

    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() { }

  maRead(n) {

  }

  viewNoti() {

  }


}
