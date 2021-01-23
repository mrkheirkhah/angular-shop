import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../Models/product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css'],
})
export class ProductStoreComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductService) {}

  fetchProducts(): void {
    this.products = this.productsService.getActiveProducts();
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
