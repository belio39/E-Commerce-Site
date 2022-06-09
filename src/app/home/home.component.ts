import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  constructor(private GetAllProducts: ProductsService) {}

  ngOnInit(): void {
    this.products = this.GetAllProducts.getAllProducts();
  }
}
