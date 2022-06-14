import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { GetAllProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss'],
})
export class GetAllProductsComponent implements OnInit {
  products: Products[] = [];

  constructor(private productsService: GetAllProductsService) {}

  ngOnInit(): void {
    console.log(this.products);
    this.products = this.productsService.getAllProducts();
  }
}
