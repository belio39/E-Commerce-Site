import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  products!: FormGroup;
  product: Products = {
    id: '',
    name: '',
    imageUrl: '',
    price: '',
    quantity: 0,
    category: '',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsData: ProductsData
  ) {}

  ngOnInit(): void {
    this.products = new FormGroup({
      name: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
    });
    this.products.statusChanges.subscribe((status) => {
      setTimeout(() => {}, 3000);
      console.log(status);
    });
  }
  onSubmit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.productsData.getProduct(id).subscribe((data) => {
        this.product = data;
        console.log(this.product);
      });
    });
  }
}
