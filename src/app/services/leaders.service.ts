import { Injectable } from '@angular/core';
import { Leader } from './../shared/leader';
//import { LEADERS } from './../shared/leaders';
//import { Promotion } from '../shared/promotion';
import { Observable, of } from 'rxjs';
import { baseURL } from './../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({ providedIn: 'root' })

export class LeadersService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    //return of(LEADERS).pipe(delay(500));
  }
  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError))
    //return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(500));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
    .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeaderIds(): Observable<string[] | any> {
    return this.getLeaderIds().pipe(map(leaders => leaders.map(leader => leader.id)))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putLeader(leader: Leader): Observable<Leader> {
    console.log(leader);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Leader>(baseURL + 'leaders/' + leader.id, leader, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}