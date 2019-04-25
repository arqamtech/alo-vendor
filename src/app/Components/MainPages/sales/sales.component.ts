import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/Services/Sales/sales.service';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ProductService } from 'src/app/Services/Products/product.service';

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
    private saleService: SalesService,
    public prodService: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let tempArray: any;
    this.products = [];
    this.prodService.getProducts().then((res) => {
      tempArray = res;
      this.products = tempArray;
      this.productsLoaded = tempArray;
      this.showSpinner = false;
    });
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
