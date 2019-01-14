
import { Component, OnInit, Inject } from '@angular/core';

import { Product } from './../../shared/product';
import { ProductService } from './../../services/product.service';

import { Promotion } from './../../shared/promotion';
import { PromotionService } from './../../services/promotion.service';

import { Leader } from './../../shared/leader';
import { LeadersService } from './../../services/leaders.service';


import { Banner } from './../../shared/banner';
import { BannerService } from './../../services/banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  product: Product;
  promotion: Promotion;
  promotionLoop: Promotion[];
  leader: Leader;
  banner: Banner[];
  errMess: string;

  constructor(
    private productService: ProductService,
    private promotionService: PromotionService,
    private promotionService1: PromotionService,
    private leadersService: LeadersService,
    private bannerService: BannerService,
    @Inject('BaseURL') private BaseURL
  ) { }

  ngOnInit() {
    this.productService.getFeaturedProduct()
      .subscribe(
        (product) => this.product = product
      );

    this.promotionService.getFeaturedPromotion()
      .subscribe(
        (promotion) => this.promotion = promotion
      );

    this.promotionService1.getPromotions()
      .subscribe(
        (promotionLoop) => this.promotionLoop = promotionLoop
      );

    this.leadersService.getFeaturedLeader()
      .subscribe(
        (leader) => this.leader = leader
      );

    this.bannerService.getBanners()
      .subscribe(
        (banner) => this.banner = banner,
        errMess => this.errMess = <any>errMess
      );
  }

}
