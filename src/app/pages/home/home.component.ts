import { ProductsAllComponent } from './../products-all/products-all.component';

import { Component, OnInit, Inject } from '@angular/core';

import { Product } from './../../shared/product';
import { ProductService } from './../../services/product.service';

import { Promotion } from './../../shared/promotion';
import { PromotionService } from './../../services/promotion.service';

import { Leader } from './../../shared/leader';
import { LeadersService } from './../../services/leaders.service';


import { Banner } from './../../shared/banner';
import { BannerService } from './../../services/banner.service';
import { flyInOut, expand } from './../../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class HomeComponent implements OnInit {

  product: Product;
  promotion: Promotion;
  promotionLoop: Promotion[];
  productsall: Product[];
  leader: Leader;
  banner: Banner[];
  errMess: string;

  constructor(
    private productService: ProductService,
    private ProductsAllComponent: ProductService,
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

    this.ProductsAllComponent.getProducts()
      .subscribe(
        (productsall) => this.productsall = productsall
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
