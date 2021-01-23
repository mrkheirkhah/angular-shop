import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //import router

import { IProduct } from '../Models/product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  private prodId: string;
  title: string | undefined;
  product: IProduct = {
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
    isAvailable: false,
    ownerName: '',
  };
  constructor(
    private router: Router,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.prodId = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.product = this.productServices.getProductData(+this.prodId);
  }

  saveProd(): void {
    this.productServices.updateProduct(this.product);
    this.router.navigate(['admin']);
  }

  deleteProd(): void {
    this.productServices.deleteProduct(this.product.id);
    this.router.navigate(['admin']);
  }
}
