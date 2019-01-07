import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product;
  promotion: Promotion;

  constructor(
    private productService: ProductService,
    private promotionService: PromotionService
  ) { }

  ngOnInit() {
    this.product = this.productService.getFeaturedProduct();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
