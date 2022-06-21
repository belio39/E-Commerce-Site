import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { GetAllProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsServices: GetAllProductsService) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllKidsCategory();
  }
}
