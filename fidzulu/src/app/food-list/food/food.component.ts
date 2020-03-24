import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() foodItem: Food;

  constructor() { }

  ngOnInit() {
  }

}
