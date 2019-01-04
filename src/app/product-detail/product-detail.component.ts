import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../shared/product';
//import {PRODUCTS} from '../shared/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  //products: Product[] = PRODUCTS;
  @Input()
  product: Product;
  constructor() { }
  ngOnInit() { }
}