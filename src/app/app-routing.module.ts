import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddProductComponent } from './admin-dash/products/add-product/add-product.component';
import { EditProductComponent } from './admin-dash/products/edit-product/edit-product.component';
import { GetAllProductsComponent } from './admin-dash/products/get-all-products/get-all-products.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { KidsComponent } from './shop/kids/kids.component';
import { LadiesComponent } from './shop/ladies/ladies.component';
import { MenComponent } from './shop/men/men.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
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
    path: 'edit-product',
    component: EditProductComponent,
  },
  {
    path: 'men-collections',
    component: MenComponent,
  },
  {
    path: 'kids-collections',
    component: KidsComponent,
  },
  {
    path: 'ladies-collections',
    component: LadiesComponent,
  },
  {
    path: 'single-product/:id',
    component: SingleProductComponent,
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./admin-dash/admin.module').then((m) => m.AdminModule),
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
