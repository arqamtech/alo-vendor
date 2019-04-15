import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotifyPopComponent } from '../../Notifications/notify-pop/notify-pop.component';

@Component({
  selector: 'app-main-top-bar',
  templateUrl: './main-top-bar.component.html',
  styleUrls: ['./main-top-bar.component.scss'],
})
export class MainTopBarComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
  ) { }

  ngOnInit() { }





  async gtNoti(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotifyPopComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
