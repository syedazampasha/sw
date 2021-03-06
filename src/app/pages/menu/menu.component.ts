import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../shared/product'; 
import { ProductService } from './../../services/product.service';

import { flyInOut, expand } from './../../animations/app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {

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
