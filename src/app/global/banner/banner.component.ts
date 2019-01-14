import { Component, OnInit, Inject } from '@angular/core';

import { Banner } from '../../shared/banner';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: Banner[];
  errMess: string;

  constructor(
    private BannerService: BannerService,
    @Inject('BaseURL') private BaseURL
  ) { }

  /* ngOnInit() {
    debugger;
    this.bannerService.getFeaturedBanner().subscribe((banner) => this.banner = banner);
    debugger;
    errMess => this.errMess = <any>errMess
  } */

  ngOnInit() {
    this.BannerService.getBanners()
      .subscribe(
        (banners) => this.banners = banners,
        errMess => this.errMess = <any>errMess
      );
  }


}
