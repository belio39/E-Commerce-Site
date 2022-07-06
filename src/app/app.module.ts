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
import { CartComponent } from './cart/cart.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenComponent } from './shop/men/men.component';
import { KidsComponent } from './shop/kids/kids.component';
import { LadiesComponent } from './shop/ladies/ladies.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { AddProductComponent } from './admin-dash/products/add-product/add-product.component';
import { GetAllProductsComponent } from './admin-dash/products/get-all-products/get-all-products.component';
import { EditProductComponent } from './admin-dash/products/edit-product/edit-product.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    ShopComponent,
    CartComponent,
    AdminDashComponent,
    CarouselComponent,
    MenComponent,
    KidsComponent,
    LadiesComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
