import { Injectable } from '@angular/core';
import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root'
})

export class LeadersService {
  getLeaders(): Leader[] {
    console.log('hello Mr. Leader ')
    return LEADERS;
  }
  getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }

  constructor() { }
}