import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Laptop } from '../models/laptop';
import { LaptopService } from './laptop.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {

  laptops$: Observable<Laptop[]>;
  team$: Observable<Team>;

  constructor(
    private laptopService: LaptopService
  ) { }

  ngOnInit() {
    this.laptops$ = this.laptopService.getLaptops();
    this.team$ = this.laptopService.getTeam();
  }

}
