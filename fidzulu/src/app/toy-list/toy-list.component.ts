import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy';
import { ToyService } from './toy.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.css']
})
export class ToyListComponent implements OnInit {

  toys$: Observable<Toy[]>;
  team$: Observable<Team>;

  constructor(
    private toyService: ToyService
  ) { }

  ngOnInit() {
    this.toys$ = this.toyService.getToys();
    this.team$ = this.toyService.getTeam();
  }

}
