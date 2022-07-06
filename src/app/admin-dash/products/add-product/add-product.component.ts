import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsData } from 'src/app/services/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products!: FormGroup;

  constructor(private productService: ProductsData) {}
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
  msg: string = '';
  onSubmit() {
    this.productService.addproduct(this.products.value).subscribe(
      (res) => {
        console.log(res);
        this.msg = res.message;
      },
      (error) => console.log(error)
    );
    this.products.reset();
  }
}
