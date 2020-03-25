import { Component, OnInit } from '@angular/core';
import { BikeService } from './bike.service';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike';
import { Team } from '../models/team';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  bikes$: Observable<Bike[]>;
  team$: Observable<Team>;

  constructor(
    private bikeService: BikeService
  ) { }

  ngOnInit() {
    this.bikes$ = this.bikeService.getBikes();
    this.team$ = this.bikeService.getTeam();
  }

}
