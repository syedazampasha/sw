import { Injectable } from '@angular/core';
import { Product } from './../shared/product';
//import { PRODUCTS } from './../shared/products';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { delay, map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({ providedIn: 'root' })

export class ProductService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseURL + 'products')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(baseURL + 'products/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedProduct(): Observable<Product> {
    return this.http.get<Product[]>(baseURL + 'products?featured=true')
      .pipe(map(products => products[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getProductIds(): Observable<string[] | any> {
    return this.getProducts()
      .pipe(map(products => products.map(product => product.id)))
      .pipe(catchError(error => error));
  }

  putProduct(product: Product): Observable<Product> {
    console.log(product);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Product>(baseURL + 'products/' + product.id, product, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}