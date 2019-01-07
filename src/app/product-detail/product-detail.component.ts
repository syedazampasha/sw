import { routes } from './../app-routing/routes';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../shared/product';
//import {PRODUCTS} from '../shared/products';

import { Params, ActivatedRoute } from '@angular/router';// for product specific id
import { Location } from '@angular/common';  // for product specific id

import { ProductService } from './../services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  //products: Product[] = PRODUCTS;
  //@Input() 
  product: Product;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() { // productdetail/1 or /2 etc
    let id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }

  goBack(): void {
    this.location.back();
  }
}