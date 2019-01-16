import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../shared/product';
import { ProductService } from './../../services/product.service';

import { flyInOut, expand } from './../../animations/app.animations';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ProductsAllComponent implements OnInit {

  products: Product[];
  errMess: string;

  constructor(
    private ProductService: ProductService,
    @Inject('BaseURL') private BaseURL
  ) { }

  ngOnInit() {
    this.ProductService.getProducts()
      .subscribe(
        (products) => this.products = products,
        errMess => this.errMess = <any>errMess
      );
  }
  /* onSelect(product: Product) {
    this.selectedProduct = product;
  } */
}
