import { Component, OnInit, OnDestroy } from '@angular/core';
import { DvdService } from './dvd.service';
import { Observable, Subscription } from 'rxjs';
import { Dvd } from '../models/dvd';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  dvds$: Observable<Dvd[]>;
  team$: Observable<Team>;

  constructor(
    private dvdService: DvdService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.dvds$ = this.dvdService.getDvds();
      this.team$ = this.dvdService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
