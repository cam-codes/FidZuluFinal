import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable, Subscription } from 'rxjs';
import { Toy } from '../models/toy';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Injectable({
  providedIn: 'root'
})
export class ToyService implements OnDestroy {

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

  getToys(): Observable<Toy[]> {
    return this.apiService.get(`/toys/all/${this.location}`);
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/toys/team');
  }
  
}
