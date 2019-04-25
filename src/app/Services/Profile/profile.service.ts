import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
    ProfileService=new FormGroup({
      StoreName: new FormControl(""),
      OwnerName: new FormControl(""),
      PhoneNumber: new FormControl(""),
      StoreCategory:new FormControl(""),
      StoreLocation: new FormControl(""),
      email: new FormControl(""),
      pass:new FormControl(""),
      status: new FormControl(""),
      Banner : new FormControl(""),
    })
  constructor(
  ) { }


  getProfile() {
  }


}
