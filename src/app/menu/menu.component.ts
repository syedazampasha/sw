import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  product: Product[] = PRODUCTS;

  //selectedProduct: Product = PRODUCTS[0];
  selectedProduct: Product;

  constructor() { }

  ngOnInit() { }
  
  onSelect(product: Product) {
    this.selectedProduct = product;
  }

}
