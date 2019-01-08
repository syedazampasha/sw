import { Injectable } from '@angular/core';
import { Product } from './../shared/product';
import { PRODUCTS } from './../shared/products';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(500));
    /* return new Promise(resolve => {
      setTimeout(() => resolve(PRODUCTS), 500)
    }); */
  }

  getProduct(id: string): Observable<Product> {
    return of(PRODUCTS.filter((product) => (product.id === id))[0]).pipe(delay(500));
  }

  getFeaturedProduct(): Observable<Product> {
    return of(PRODUCTS.filter((product) => product.featured)[0]).pipe(delay(500));
  }
  getProductIds(): Observable<string[] | any> {
    return of(PRODUCTS.map(product => product.id));
  }
}