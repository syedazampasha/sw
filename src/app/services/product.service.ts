import { Injectable } from '@angular/core';
import { Product } from './../shared/product';
import { PRODUCTS } from './../shared/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }

  getProduct(id: string): Promise<Product> {
    return Promise.resolve(PRODUCTS.filter((product) => (product.id === id))[0]);
  }

  getFeaturedProduct(): Promise<Product> {
    return Promise.resolve(PRODUCTS.filter((product) => product.featured)[0]);
  }
}