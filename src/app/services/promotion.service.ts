import { Injectable } from '@angular/core';
import { Promotion } from './../shared/promotion';
//import { PROMOTIONS } from './../shared/promotions';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { delay, map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({ providedIn: 'root' })

export class PromotionService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'Promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'Promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'Promotions?featured=true')
      .pipe(map(promotion => promotion[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(500));
  }
  getPromotionIds(): Observable<string | any> {
    return this.getPromotions()
      .pipe(map(promotions => promotions.map(promotion => promotion.id)))
      .pipe(catchError(error => error));
  }
  putPromotion(promotion: Promotion): Observable<Promotion> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Promotion>(baseURL + 'Promotions/' + promotion.id, promotion, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
