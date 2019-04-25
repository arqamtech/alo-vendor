import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    public db: AngularFireDatabase,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public authService: AuthService,
  ) { }

  async salesConfirm(p) {
    const alert = await this.alertCtrl.create({
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
          handler: () => {
          }
        }, {
          text: 'Sell',
          handler: data => {
            if (data.quantity) {
              this.sell(p, data.quantity);
            } else {
              this.presentToast("Enter Quantity");
            }
          }
        }
      ]
    });

    await alert.present();
  }

  sell(p, q) {
    if (q > 0 && p.Quantity > q) {
      firebase.database().ref("Products").child(p.key).child("Quantity").transaction(quans => {
        let to = Number(quans);
        let quan = Number(q);
        if (quans) {
          return +to - quan;
        } else {
          return 0;
        }
      }).then(() => {

        firebase.database().ref("Products").child(p.key).child("Sales").transaction(quans => {
          let to = Number(quans);
          let quan = Number(q);
          if (quans) {
            this.presentToast("Product Sold")
            return +to + quan;
          } else {
            this.presentToast("Please Update Inventory")
            return to;
          }

        });



      })
    } else {
      this.presentToast("Quantity Not Valid");
    }


  }




  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
