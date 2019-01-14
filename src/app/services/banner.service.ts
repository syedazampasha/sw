import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { delay, map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Banner } from './../shared/banner';

@Injectable({ providedIn: 'root' })

export class BannerService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(baseURL + 'banners')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getBanner(id: string): Observable<Banner> {
    return this.http.get<Banner>(baseURL + 'banners/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedBanner(): Observable<Banner> {
    return this.http.get<Banner[]>(baseURL + 'banners?featured=true')
      .pipe(map(banners => banners[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getBannerIds(): Observable<string[] | any> {
    return this.getBanners()
      .pipe(map(banners => banners.map(banner => banner.id)))
      .pipe(catchError(error => error));
  }
  putBanner(banner: Banner): Observable<Banner> {
    console.log(banner);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Banner>(baseURL + 'banners/' + banner.id, banner, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}