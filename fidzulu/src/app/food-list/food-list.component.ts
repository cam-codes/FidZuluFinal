import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from './food.service';
import { Food } from '../models/food';
import { Team } from '../models/team';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  food$: Observable<Food[]>;
  team$: Observable<Team>;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.food$ = this.foodService.getFood();
    this.team$ = this.foodService.getTeam();
  }

}
