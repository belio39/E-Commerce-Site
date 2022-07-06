import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss'],
})
export class KidsComponent implements OnInit {
  products: Products[] = [];

  constructor(
    private productsServices: ProductsData,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllKidsCategory();
  }
}
