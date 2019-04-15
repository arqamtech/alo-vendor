import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseCred } from './firebaseCred';

import { LoginComponent } from './Components/Auth/login/login.component';
import { ChangePassComponent } from './Components/Auth/change-pass/change-pass.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { NotVerifiedComponent } from './Components/Extra/not-verified/not-verified.component';
import { SettingsComponent } from './Components/Extra/settings/settings.component';
import { VendorBannerComponent } from './Components/Extra/vendor-banner/vendor-banner.component';


import { AddProductComponent } from './Components/Inventory/add-product/add-product.component';
import { ViewBarCodeComponent } from './Components/Inventory/view-bar-code/view-bar-code.component';
import { AuthService } from './Services/Auth/auth.service';
import { OrderService } from './Services/Order/order.service';
import { SalesService } from './Services/Sales/sales.service';

import { NotificationService } from './Services/Notifications/notification.service';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';

import { InventoryComponent } from './Components/MainPages/inventory/inventory.component';
import { OrderComponent } from './Components/MainPages/order/order.component';
import { ProfileComponent } from './Components/MainPages/profile/profile.component';
import { SalesComponent } from './Components/MainPages/sales/sales.component';

import { NotificationsComponent } from './Components/Notifications/notifications/notifications.component';
import { FaqsComponent } from './Components/FAQS/faqs/faqs.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NotifyPopComponent } from './Components/Notifications/notify-pop/notify-pop.component';
import { MainTopBarComponent } from './Components/UI/main-top-bar/main-top-bar.component';
import { SpinnerComponent } from './Components/UI/spinner/spinner.component';
import { InventoryService } from './Services/Inventory/inventory.service';


firebase.initializeApp(firebaseCred);

@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    LoginComponent,
    ChangePassComponent,
     SignUpComponent,
    NotVerifiedComponent,
    SettingsComponent,
    VendorBannerComponent,
    FaqsComponent,
    AddProductComponent,
    ViewBarCodeComponent,
    InventoryComponent,
    OrderComponent,
    ProfileComponent,
    SalesComponent,
    NotificationsComponent,
    NotifyPopComponent,
    MainTopBarComponent,
    SpinnerComponent
  ],
  entryComponents: [
    NotifyPopComponent,
    MainTopBarComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    OrderService,
    SalesService,
    InventoryService,
    NotificationService,
  

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
