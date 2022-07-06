import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsData } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsService: ProductsData) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
}
