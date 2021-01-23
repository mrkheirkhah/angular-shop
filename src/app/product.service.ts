import { Injectable } from '@angular/core';
import { IProduct } from './Models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      title: 'prod1',
      description: 'test2 prod description',
      imageUrl:
        'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png',
      isAvailable: true,
      price: 12.24,
      ownerName: 'mrkheirkhah',
    },
    {
      id: 2,
      title: 'prod2',
      description: 'test2 prod description',
      imageUrl:
        'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png',
      isAvailable: true,
      price: 100.0,
      ownerName: 'mrkheirkhah',
    },
    {
      id: 3,
      title: 'prod3',
      description: 'test3 prod description',
      imageUrl:
        'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png',
      isAvailable: false,
      price: 98.99,
      ownerName: 'mrkheirkhah',
    },
    {
      id: 4,
      title: 'prod4',
      description: 'test4 prod description',
      imageUrl:
        'https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png',
      isAvailable: true,
      price: 99.99,
      ownerName: 'mrkheirkhah',
    },
  ];

  constructor() {}

  getProducts(): IProduct[] {
    return this.products;
  }

  getActiveProducts(): IProduct[] {
    return this.products.filter((prod) => prod.isAvailable);
  }

  deleteProduct(proId: number): void {
    const index = this.products.findIndex((prod) => prod.id === proId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  getProductData(proId: number): IProduct {
    const index = this.products.findIndex((prod) => prod.id === proId);
    return this.products[index];
  }

  updateProduct(product: IProduct) {
    const index = this.products.findIndex((prod) => prod.id === product.id);
    this.products[index] = product;
  }

  addProduct(product: any) {
    const id = Math.random() * new Date().getTime();
    this.products.push({ ...product, id });
  }
}
