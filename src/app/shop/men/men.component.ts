import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
  products?: Products[];
  constructor(private productsServices: ProductsData) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllMenCategory();
  }
}
