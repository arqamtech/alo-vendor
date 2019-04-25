import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from 'src/app/Services/Profile/profile.service';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  store;


  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() { 
    this.getProfile();
  }


  getProfile() {
    this.authService.getUid().subscribe(snip => {
      let userId = snip.uid;

      this.db.object(`Seller Data/Sellers/${userId}`).snapshotChanges().subscribe(snap => {
        this.store = snap.payload.val();
        console.log(this.store)
      });


    });

  }

  // gtaddBanner() {
  //   const modal = this.modalController.create(VendorBannerPage)
  //   modal.present();
  // }
}
