import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsData } from '../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsService: ProductsData) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
}
