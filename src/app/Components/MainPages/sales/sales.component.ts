import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/Services/Sales/sales.service';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {

  products: Array<any> = [];
  productsLoaded: Array<any> = [];
  showSpinner: boolean = true;

  constructor(
    private authService: AuthService,
    private saleService: SalesService,
    public db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // this.authService.getUid().subscribe(snip => {
    //   this.products = [];
    //   firebase.database().ref(`Seller Data/Products/${snip.uid}`).once("value", snip => {
    //     this.products = [];
    //     snip.forEach(snap => {
    //       firebase.database().ref(`Products/${snap.key}`).once("value", snop => {
    //         let temp: any = snop.val();
    //         temp.key = snop.key;
    //         this.products.push(temp);
    //       });
    //     })
    //   })
    //   this.showSpinner = false;
    // });
    this.authService.getUid().subscribe(us => {

      this.db.list(`Seller Data/Products/${us.uid}`).snapshotChanges().subscribe(snap => {
        let tempArray = [];

        this.products = [];
        snap.forEach(snip => {
          firebase.database().ref("Products").child(snip.key).once("value", iiSnap => {
            var temp: any = iiSnap.val();
            temp.key = iiSnap.key;
            tempArray.push(temp);
          })
          this.products = tempArray;
          this.productsLoaded = tempArray;
          this.showSpinner = false;
        })
      })
    })

  }

  initializeItems(): void {
    this.products = this.productsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.products = this.products.filter((v) => {
      if (v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  sellConfirm(p) {
    this.saleService.salesConfirm(p).then(() => {
      this.getProducts();
    });
  }

}
