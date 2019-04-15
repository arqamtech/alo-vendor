import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  product = new FormGroup({
    Name: new FormControl(''),
    CategoryKey: new FormControl(''),
    SubCategoryKey: new FormControl(''),
    SubCategoryItemKey: new FormControl(''),
    BrandName: new FormControl(''),
    Quantity: new FormControl(''),
    Status: new FormControl('Pending'),
    ImageUrl: new FormControl(''),
    StoreKey: new FormControl(''),
    StoreName: new FormControl(''),
    Sales: new FormControl('0'),
    Price: new FormControl(''),
    Color: new FormControl(''),
    Size: new FormControl(''),
    TimeStamp: new FormControl(moment().format()),

  })
  constructor(
    private db: AngularFireDatabase,
  ) { }

  addProduct() { }
  checkData() { }
  getCats() {
    return this.db.list(`Categories`).snapshotChanges()
  }
  getSubCats() {

  }
  getSubCatItems() { }


  //Image Uploading Section
  fileChange() {

  }


  removeImage() {

  }

}
