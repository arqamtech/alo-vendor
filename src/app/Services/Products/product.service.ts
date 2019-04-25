import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(

    public db: AngularFireDatabase,
    public authService: AuthService,

  ) { }



  getProducts() {
    let prods: Array<any> = [];
    let u = new Promise((resolve, reject) => {

      this.authService.getUid().subscribe(us => {
        this.db.list(`Seller Data/Products/${us.uid}`).snapshotChanges().subscribe(snap => {
          snap.forEach(snip => {
            this.db.object(`Products/${snip.key}`).snapshotChanges().subscribe(ssip => {
              let temp: any = ssip.payload.val();
              temp.key = ssip.key;
              prods.push(temp);
            })
            resolve(prods);
          })
        })
      })
    })
    return u;
  }
}
