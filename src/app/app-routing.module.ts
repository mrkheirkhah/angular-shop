import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductStoreComponent } from './product-store/product-store.component';
const routes: Routes = [
  { path: '', component: ProductStoreComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'products',
    component: ProductStoreComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent,
  },
  {
    path: 'product/show/:id',
    component: ProductShowComponent,
  },
  {
    path: 'product/:id',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
