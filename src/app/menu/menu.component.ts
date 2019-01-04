import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
//import { PRODUCTS } from '../shared/products';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  product: Product[];

  //selectedProduct: Product = PRODUCTS[0];
  selectedProduct: Product;

  constructor(private ProductService: ProductService) {

  }

  ngOnInit() {
    this.product = this.ProductService.getProducts();
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

}
