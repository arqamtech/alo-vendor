import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private menuCtrl:MenuController
  ) { 
    {
      this.menuCtrl.enable(true);
     }
  }

  ngOnInit() {
    this.authService.getUid().subscribe(snip => {
      let userId = snip.uid;
      console.log(userId);
    });      
  }











}
