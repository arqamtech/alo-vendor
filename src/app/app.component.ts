import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
 public appPages = [
    {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'ios-analytics'
  },
  {
    title: 'Sales',
    url: '/sales',
    icon: 'ios-cash'
  },
  {
    title: 'Orders',
    url: '/order',
    icon: 'md-cart'
  },
  {
    title: 'Inventory',
    url: '/inventory',
    icon: 'logo-buffer'
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: 'ios-person'
  },
  {
    title: 'FAQS',
    url: '/faqs',
    icon: 'help'
  },
   ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
