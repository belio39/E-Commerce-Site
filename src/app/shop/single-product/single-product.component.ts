import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  products?: Products;
  constructor(private productsServices: ProductsData) {}

  ngOnInit(): void {
    this.products = this.productsServices.getProductById('8');
  }
}
