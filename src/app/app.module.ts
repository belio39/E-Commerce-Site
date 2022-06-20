import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AddProductComponent } from './admin-dash/products/add-product/add-product.component';
import { GetAllProductsComponent } from './admin-dash/products/get-all-products/get-all-products.component';
import { DeleteProductComponent } from './admin-dash/products/delete-product/delete-product.component';
import { EditProductComponent } from './admin-dash/products/edit-product/edit-product.component';
import { MenComponent } from './shop/men/men.component';
import { KidsComponent } from './shop/kids/kids.component';
import { LadiesComponent } from './shop/ladies/ladies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    ShopComponent,
    ContactusComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AdminDashComponent,
    CarouselComponent,
    AddProductComponent,
    GetAllProductsComponent,
    DeleteProductComponent,
    EditProductComponent,
    MenComponent,
    KidsComponent,
    LadiesComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
