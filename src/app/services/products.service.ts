import { Injectable } from '@angular/core';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root',
})
export class GetAllProductsService {
  private products: Products[] = [
    {
      id: '0',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
    {
      id: '1',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
    },
  ];

  constructor() {}

  addProduct(product: Products) {
    this.products.push(product);
  }

  getAllProducts() {
    return this.products;
  }
}
