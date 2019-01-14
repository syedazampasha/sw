import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
//import { PRODUCTS } from '../shared/products';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
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
