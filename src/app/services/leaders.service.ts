import { Injectable } from '@angular/core';
import { LEADERS } from './../shared/leaders';
import { Leader } from './../shared/leader';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root'
})

export class LeadersService {
  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }
  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }

  constructor() { }
}