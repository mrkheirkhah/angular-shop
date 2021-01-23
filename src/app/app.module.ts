import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AdminComponent } from './admin/admin.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsTableComponent,
    EditProductComponent,
    ProductShowComponent,
    AddProductComponent,
    ProductStoreComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
