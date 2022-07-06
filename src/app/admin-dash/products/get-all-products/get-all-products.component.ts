import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss'],
})
export class GetAllProductsComponent implements OnInit {
  products: Products[] = [];
  product: Products = {
    id: '',
    name: '',
    imageUrl: '',
    price: '',
    quantity: 0,
    category: '',
  };

  msg: string = '';

  constructor(private productsData: ProductsData, private router: Router) {}

  ngOnInit(): void {
    this.productsData.getAllproducts().subscribe((data) => {
      this.products = data.products;
    });
  }

  getProduct(id: string) {
    this.productsData.editProduct(id).subscribe((data) => {
      this.product = data;
      this.router.navigate(['/edit-product']);
    });
  }

  deleteProduct(id: string) {
    this.productsData.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.msg = res.message;
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }
}
