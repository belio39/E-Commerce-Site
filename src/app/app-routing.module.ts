import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddProductComponent } from './admin-dash/products/add-product/add-product.component';
import { GetAllProductsComponent } from './admin-dash/products/get-all-products/get-all-products.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pageNotFound',
    component: PagenotfoundComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'admin',
    component: AdminDashComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'get-all-products',
    component: GetAllProductsComponent,
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
