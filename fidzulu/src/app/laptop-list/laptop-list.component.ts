import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Laptop } from '../models/laptop';
import { LaptopService } from './laptop.service';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  laptops$: Observable<Laptop[]>;
  team$: Observable<Team>;

  constructor(
    private laptopService: LaptopService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.laptops$ = this.laptopService.getLaptops();
      this.team$ = this.laptopService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
