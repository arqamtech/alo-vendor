import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController, AlertController, LoadingController, ToastController, PopoverController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/Services/Auth/auth.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {

  prods: Array<any> = [];
  prodsLoaded: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    // public navParams: NavParams,
    public db: AngularFireDatabase,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    private authService: AuthService,

  ) {
    this.menuCtrl.enable(true);
    this.getProducts();
  }

  ngOnInit() { }



  viewBar(p) {
    this.navCtrl.navigateForward(`view-bar-code/${p}`);
  }



  getProducts() {
    this.prods = [];
    this.prodsLoaded = [];

    this.authService.getUid().subscribe(snip => {
      let userId = snip.uid;
      let tempArray = [];

      this.db.list(`Seller Data/Products/${userId}`).snapshotChanges().subscribe(snap => {
        tempArray = [];
        this.prods = [];
        this.prodsLoaded = [];
        snap.forEach(snip => {
          this.db.object(`Products/${snip.key}`).snapshotChanges().subscribe(iiSnap => {

            var temp: any = iiSnap.payload.val();
            temp.key = iiSnap.key;
            tempArray.push(temp);
          })
          this.prods = tempArray;
          this.prodsLoaded = tempArray;
        })
      })
    })
  }

  initializeItems(): void {
    this.prods = this.prodsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.prods = this.prods.filter((v) => {
      if (v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  async addInventory(p) {
    let alert = await this.alertCtrl.create({
      header: p.Name,
      inputs: [
        {
          name: 'quantity',
          placeholder: 'Quantity',
          type: 'number',
          min: '0',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Add',
          handler: data => {
            if (data.quantity) {
              this.UpdateQuantity(p, data.quantity);
            } else {
              this.presentToast("Enter Quantity");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  UpdateQuantity(p, q) {
    if (q > 0) {

      firebase.database().ref("Products").child(p.key).child("Quantity").transaction(quans => {
        // console.log(quans.val());
        let to = Number(quans);
        let quan = Number(q);
        if (quans) {
          this.presentToast("Quantity Updated")
          return +to + quan;
        } else {
          this.presentToast("Quantity Updated")
          return quan;
        }
      })
    } else {
      this.presentToast("Quantity Not Valid");
    }
  }

  // gtAddProduct() {
  //   this.navCtrl.push(AddProductPage);
  // }

  async delPConfirm(p) {
    let alert = await this.alertCtrl.create({
      header: 'Remove Product ?',
      message: 'This Product cannot be recovered again.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.delP(p);
          }
        }
      ]
    });
    await alert.present();
  }
  delP(p) {

    // let loading = this.loadingCtrl.create({
    //   content: 'Removing Product...'
    // });

    firebase.storage().ref("Products").child(firebase.auth().currentUser.uid).child(p.Name).delete().then(() => {
      firebase.database().ref("Products").child(p.key).remove().then(() => {
        firebase.database().ref("CategorieswiseProducts").child(p.CategoryKey).child(p.key).remove().then(() => {
          firebase.database().ref("Seller Data/Products").child(firebase.auth().currentUser.uid).child(p.key).remove().then(() => {
            // loading.dismiss();
            this.presentToast("Product Deleted");
          })
        })
      })
    })
  }

  // edit(p) {
  //   this.navCtrl.push(AddProductPage, { product: p })
  // }



  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "top",
      showCloseButton: false,
    });
    toast.present();
  }

}
