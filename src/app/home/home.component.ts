
import { Component, OnInit } from '@angular/core';

import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { Leader } from './../shared/leader';
import { LeadersService } from './../services/leaders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product;
  promotion: Promotion;
  leader: Leader;

  constructor(
    private productService: ProductService,
    private promotionService: PromotionService,
    private leadersService: LeadersService,
  ) { }

  ngOnInit() {
    this.product = this.productService.getFeaturedProduct();
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leadersService.getFeaturedLeader();
  }

}
