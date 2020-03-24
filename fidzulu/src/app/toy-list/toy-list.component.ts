import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Toy } from '../models/toy';
import { ToyService } from './toy.service';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  toys$: Observable<Toy[]>;
  team$: Observable<Team>;

  constructor(
    private toyService: ToyService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.toys$ = this.toyService.getToys();
      this.team$ = this.toyService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
