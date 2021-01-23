import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //import router
import { ProductService } from '../product.service';
import { IProduct } from '../Models/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css'],
})
export class ProductShowComponent implements OnInit {
  prodId: string | undefined;
  product: IProduct | undefined;
  constructor(
    router: Router,
    private productServices: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.prodId = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.product = this.productServices.getProductData(+this.prodId!);
  }
}
