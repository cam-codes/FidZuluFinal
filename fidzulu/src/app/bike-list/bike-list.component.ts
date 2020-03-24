import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from './bike.service';
import { Observable, Subscription } from 'rxjs';
import { Bike } from '../models/bike';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  
  bikes$: Observable<Bike[]>;
  team$: Observable<Team>;

  constructor(
    private bikeService: BikeService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.bikes$ = this.bikeService.getBikes();
      this.team$ = this.bikeService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
