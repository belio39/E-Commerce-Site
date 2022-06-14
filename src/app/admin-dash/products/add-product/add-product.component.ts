import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetAllProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products!: FormGroup;
  constructor(private productService: GetAllProductsService) {}

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
    console.log(this.products.value);
    this.productService.addProduct(this.products.value);
    this.products.reset();
  }
}
