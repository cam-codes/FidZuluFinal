import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Laptop } from '../models/laptop';
import { ApiService } from '../routing-utils/api.service';
import { Observable, Subscription } from 'rxjs';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Injectable({
  providedIn: 'root'
})
export class LaptopService implements OnDestroy {

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

  getLaptops(): Observable<Laptop[]> {
    return this.apiService.get(`/laptops/all/${this.location}`);
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/laptops/team');
  }
}
