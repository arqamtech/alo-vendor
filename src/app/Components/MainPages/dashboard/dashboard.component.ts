import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  labelsArray: Array<any> = [];
  dataArray: Array<any> = [];
  pendOrdersTot: number = 0;

  prods: Array<any> = [];


  // uid = this.authService.getUidF();


  constructor(
    private authService: AuthService,
    private db: AngularFireDatabase,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
    this.getProducts();
    // console.log(this.uid)
  }

  ngOnInit() {
  }


  getProducts() {

    this.authService.getUid().subscribe(snip => {
      let userId = snip.uid;



      this.db.list(`Seller Data/Products/${userId}`, ref => ref.orderByChild('Sales')).snapshotChanges().subscribe(snap => {
        this.prods = [];
        snap.forEach(snip => {
          firebase.database().ref("Products").child(snip.key).once("value", iiSnap => {
            var temp: any = iiSnap.val();
            temp.key = iiSnap.key;
            this.labelsArray.push(temp.Name);
            this.dataArray.push(temp.Sales);
            this.prods.push(temp);
          }).then(() => {
            // this.LoadCharts();
          })
        })
      })
    });

  }








}
