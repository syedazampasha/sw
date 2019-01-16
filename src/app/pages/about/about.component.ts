import { Component, OnInit, Inject } from '@angular/core';

import { Leader } from './../../shared/leader';
import { LeadersService } from './../../services/leaders.service';

//import { baseURL } from './../shared/baseurl';
import { flyInOut } from './../../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block'
  },
  animations: [
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(
    private leaderService: LeadersService,
    @Inject('BaseURL') private BaseURL
  ) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe((leaders) => this.leaders = leaders);
  }
}