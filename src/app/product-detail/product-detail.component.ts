import { routes } from './../app-routing/routes';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../shared/product';
//import {PRODUCTS} from '../shared/products';

import { Params, ActivatedRoute } from '@angular/router';// for product specific id
import { Location } from '@angular/common';  // for product specific id

import { ProductService } from './../services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  //products: Product[] = PRODUCTS;
  //@Input() 
  product: Product;
  productIds: string[];
  prev: string;
  next: string;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }
  /* ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.productService.getProduct(id)
      .subscribe((product) => this.product = product);
  } */

  ngOnInit() {
    this.productService.getProductIds().subscribe(productIds => this.productIds = productIds);
    this.route.params.pipe(switchMap((params: Params) => this.productService.getProduct(params['id'])))
      .subscribe(product => { this.product = product; this.setPrevNext(product.id); });
  }
  setPrevNext(dishId: string) {
    const index = this.productIds.indexOf(dishId);
    this.prev = this.productIds[(this.productIds.length + index - 1) % this.productIds.length];
    this.next = this.productIds[(this.productIds.length + index + 1) % this.productIds.length];
  }

  goBack(): void {
    this.location.back();
  }
}