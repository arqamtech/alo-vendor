import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.getUid().subscribe(snip => {
      let userId = snip.uid;
      console.log(userId);
    });      
  }











}
