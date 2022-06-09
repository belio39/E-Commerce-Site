import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Products[] = [
    {
      id: '0',
      image:
        'https://media.self.com/photos/627e6544c53a00f1fdf35548/4:3/w_2560%2Cc_limit/Best-Memorial-Day-Clothing-Sales.jpeg',
    },
    {
      id: '1',
      image:
        'https://media.self.com/photos/627e6544c53a00f1fdf35548/4:3/w_2560%2Cc_limit/Best-Memorial-Day-Clothing-Sales.jpeg',
    },
  ];

  constructor() {}

  getAllProducts() {
    return this.products;
  }
}
