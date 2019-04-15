import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/Services/Inventory/inventory.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  cats: Observable<any>;
  subCats: Array<any> = [];
  SubCatItem: Array<any> = [];

  img1: any;
  img2: any;

  store;

  constructor(
    private inventService: InventoryService,
    private authService: AuthService,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getCats();
    this.getProfile();
  }

  addProduct() {
    let temp = this.inventService.product.value;
    temp.StoreKey = this.store.key;
    temp.StoreName = this.store.StoreName;
    console.log(temp)
  }
  checkData() {
    this.addProduct()
   }
  getCats() {
    this.cats = this.inventService.getCats()
  }
  getSubCats() {
    let temp = this.inventService.product.value;
    console.log(temp.CategoryKey);

    firebase.database().ref("SubCatsIndex").child(temp.CategoryKey).once("value", itemSnap => {
      itemSnap.forEach(ssnip => {
        firebase.database().ref("SubCategories").child(ssnip.key).once("value", isnap => {
          var te = isnap.val();
          te.key = isnap.key;
          this.subCats.push(te);
        })
      })
    })


  }
  getSubCatItems() {
    let temp = this.inventService.product.value;
    console.log(temp.SubCategoryKey);

    firebase.database().ref("SubCatsItemsIndex").child(temp.SubCategoryKey).once("value", itemSnap => {
      itemSnap.forEach(ssnip => {
        firebase.database().ref("SubCategoriesItems").child(ssnip.key).once("value", isnap => {
          var tei = isnap.val();
          tei.key = isnap.key;
          this.SubCatItem.push(tei);
        })
      })
    })
  }


  getProfile() {
    this.authService.getUid().subscribe(snip => {
      this.db.object(`Seller Data/Sellers/${snip.uid}`).snapshotChanges().subscribe(snap => {
        let temp: any = snap.payload.val();
        temp.key = snap.key;
        this.store = temp;
      });
    });
  }


  //Image Uploading Section
  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
    let fileList: FileList = event.target.files;
    let file: File = fileList[0];
    this.img2 = file;
  }



  removeImage() {
    this.img1 = null;
  }
}

