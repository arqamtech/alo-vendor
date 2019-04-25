import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginModel = new FormGroup({
    Email: new FormControl("", [
      Validators.required,
      // Validators.pattern("/\S+@\S+\.\S+/"),
    ]),
    Password: new FormControl("", [
      Validators.required,
    ]),
  });
  //SignUp dataModel
  user = new FormGroup({
    StoreName: new FormControl('', Validators.required),
    OwnerName: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    StoreCategory: new FormControl(''),
    StoreLocation: new FormControl(''),
    Password: new FormControl(""),
    Email: new FormControl("",
    ),
  });




  userId: string = "no user";
  constructor(
    private toastCtrl: ToastController,
    private fireAuth: AngularFireAuth,
  ) {

  }
  ngOnInit() {
  }
  login(user) {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signInWithEmailAndPassword(user.Email, user.Password)
        .catch((err => {
          this.presentToast(err.message);
        })).then(() => {
          this.fireAuth.authState.pipe(first()).pipe(
            tap(user => {
              if (user) {
                window.location.href = "/dashboard";
              }
            })
          ).subscribe()
        })
    });
  }


  signUp(signUp) {
    console.log(signUp);

  }
  getUidF() {
    return firebase.auth().currentUser.uid;
  }

  isLoggedIn() {

    return this.fireAuth.authState.pipe(first())
  }

  getUid() {
    return this.fireAuth.authState.pipe(
      tap(user => {
        if (user) {
          this.userId = user.uid;
        }
      })
    )
  }

  signOut() {
    this.fireAuth.auth.signOut().then(() => {
      window.location.href = "/login";
    })
  }
  //Support Functions

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
