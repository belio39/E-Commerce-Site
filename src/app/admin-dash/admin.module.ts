import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './products/add-product/add-product.component';
import { GetAllProductsComponent } from './products/get-all-products/get-all-products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { DeleteProductComponent } from './products/delete-product/delete-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddProductComponent,
    GetAllProductsComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'add-product', component: AddProductComponent },
          { path: 'get-all-products', component: GetAllProductsComponent },
          { path: 'edit-product/:id', component: EditProductComponent },
          { path: 'delete-product', component: DeleteProductComponent },
        ],
      },
    ]),
  ],
})
export class AdminModule {}
