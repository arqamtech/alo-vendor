import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() { }









  //Top Functions
  gtNotifications() { this.navCtrl.navigateRoot('notifications'); }
  gtSettings() { this.navCtrl.navigateRoot('settings'); }


}
