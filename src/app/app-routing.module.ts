import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './Components/Auth/change-pass/change-pass.component';
import { SingUpComponent } from './Components/Auth/sing-up/sing-up.component';
import { NotVerifiedComponent } from './Components/Extra/not-verified/not-verified.component';
import { SettingsComponent } from './Components/Extra/settings/settings.component';
import { VendorBannerComponent } from './Components/Extra/vendor-banner/vendor-banner.component';
import { AddProductComponent } from './Components/Inventory/add-product/add-product.component';
import { ViewBarCodeComponent } from './Components/Inventory/view-bar-code/view-bar-code.component';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { InventoryComponent } from './Components/MainPages/inventory/inventory.component';
import { OrderComponent } from './Components/MainPages/order/order.component';
import { ProfileComponent } from './Components/MainPages/profile/profile.component';
import { SalesComponent } from './Components/MainPages/sales/sales.component';
import { NotificationsComponent } from './Components/Notifications/notifications/notifications.component';
import { FaqsComponent } from './Components/FAQS/faqs/faqs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'change-pass',
    component:ChangePassComponent
  },
  {
    path: 'sign-up',
    component:SingUpComponent
  },
  {
    path: 'notVerified',
    component:NotVerifiedComponent
  },
  {
    path: 'settings',
    component:SettingsComponent
  },
  {
    path: 'vendor-banner',
    component:VendorBannerComponent
  },
  {
    path: 'faqs',
    component:FaqsComponent
  },
  
  
  {
    path: 'add-product',
    component:AddProductComponent
  },

  {
    path: 'view-bar-code',
    component:ViewBarCodeComponent
  },

  {
    path: 'inventory',
    component:InventoryComponent
  },
  {
    path: 'order',
    component:OrderComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'sales',
    component:SalesComponent
  },
  {
    path: 'notifications',
    component:NotificationsComponent
  },
 

 
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
