import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsData } from 'src/app/services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsData: ProductsData
  ) {}

  ngOnInit(): void {
    // this.productsData.deleteProduct(this.productsData.id).subscribe((res) => {
    //   console.log(res)
    // })
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.productsData.deleteProduct(id).subscribe((data) => {
        this.productsData = data;
        console.log(this.productsData);
      });
    });
  }
}
