import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../Models/product';
import { Router, ActivatedRoute, Params } from '@angular/router'; //import router
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = {
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
    isAvailable: false,
    ownerName: '',
  };
  constructor(
    private productServices: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProduct() {
    this.productServices.addProduct(this.product);
    this.router.navigate(['admin']);
  }
}
