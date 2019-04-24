import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/Services/Notifications/notification.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notify-pop',
  templateUrl: './notify-pop.component.html',
  styleUrls: ['./notify-pop.component.scss'],
})
export class NotifyPopComponent implements OnInit {
  notis: Observable<any>;
  showSpinner: boolean = true;

  constructor(
    private notiService: NotificationService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    // this.notis = this.notiService.getUnreadNotis();
    // this.notis.subscribe(res => (this.notisLength = res.length))
    // this.notis.subscribe(() => this.showSpinner = false);
  }


  getNotis(){
   
  }
  viewAll(){
    this.navCtrl.navigateRoot('notifications');
  }
}

