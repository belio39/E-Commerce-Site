import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsData {
  private products: Products[] = [
    {
      id: '0',
      name: 'kaki',
      price: 'Kshs: 4500',
      category: 'kids',
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
      category: 'kids',
    },
    {
      id: '2',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'men',
    },
    {
      id: '3',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'ladies',
    },
    {
      id: '4',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'men',
    },
    {
      id: '5',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'ladies',
    },
    {
      id: '6',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'kids',
    },
    {
      id: '7',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'men',
    },
    {
      id: '8',
      name: 'kaki',
      price: 'Kshs: 4500',
      imageUrl:
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3344&q=80',
      quantity: 2,
      category: 'men',
    },
  ];

  constructor(private http: HttpClient) {}

  addproduct(product: Products): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'http://localhost:3000/products',
      product
    );
  }

  getAllproducts() {
    return this.http.get<any>('http://localhost:3000/products');
  }
  getProduct(id: string) {
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }
  editProduct(id: string) {
    return this.http.get<Products>(`http://localhost:3000/products/${id}`);
  }
  deleteProduct(id: string) {
    return this.http.delete<any>(`http://localhost:3000/products/${id}`);
  }
  getAllProducts() {
    return this.products;
  }
  getAllMenCategory() {
    return this.products.filter((Products) => Products.category == 'men');
  }
  getAllKidsCategory() {
    return this.products.filter((Products) => Products.category == 'kids');
  }
  getAllLadiesCategory() {
    return this.products.filter((Products) => Products.category == 'ladies');
  }
  getProductById(id: string) {
    return this.products.find((products) => products.id === id);
  }
}
