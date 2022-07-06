import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-ladies',
  templateUrl: './ladies.component.html',
  styleUrls: ['./ladies.component.scss'],
})
export class LadiesComponent implements OnInit {
  products?: Products[];
  constructor(private productsServices: ProductsData) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllLadiesCategory();
  }
}
