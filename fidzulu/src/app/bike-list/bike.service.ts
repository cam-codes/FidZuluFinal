import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable, Subscription } from 'rxjs';
import { Bike } from '../models/bike';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Injectable({
  providedIn: 'root'
})
export class BikeService implements OnDestroy {

  private sub = new Subscription();
  private location: string;

  constructor(
    private apiService: ApiService,
    private locationService: LocationService
  ) {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.location = location;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getBikes(): Observable<Bike[]> {
    return this.apiService.get(`/bikes/all/${this.location}`); // 'bikes' different than spec
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/bikes/team');
  }
}
