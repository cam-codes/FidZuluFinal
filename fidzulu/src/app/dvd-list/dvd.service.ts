import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../routing-utils/api.service';
import { Observable, Subscription } from 'rxjs';
import { Dvd } from '../models/dvd';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Injectable({
  providedIn: 'root'
})
export class DvdService implements OnDestroy {

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

  getDvds(): Observable<Dvd[]> {
    return this.apiService.get(`/dvds/all/${this.location}`);
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/dvds/team');
  }
}
