import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductService) {}

  fetchProducts(): void {
    this.products = this.productsService.getProducts();
  }

  deleteProduct(prodId: number): void {
    this.productsService.deleteProduct(prodId);
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
