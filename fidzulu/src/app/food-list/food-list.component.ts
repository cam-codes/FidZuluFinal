import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FoodService } from './food.service';
import { Food } from '../models/food';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  food$: Observable<Food[]>;
  team$: Observable<Team>;

  constructor(
    private foodService: FoodService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.food$ = this.foodService.getFood();
      this.team$ = this.foodService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
