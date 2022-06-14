import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
import { GetAllProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsService: GetAllProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
}
