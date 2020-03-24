import { Component, OnInit } from '@angular/core';
import { DvdService } from './dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { Team } from '../models/team';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {

  dvds$: Observable<Dvd[]>;
  team$: Observable<Team>;

  constructor(
    private dvdService: DvdService
  ) { }

  ngOnInit() {
    this.dvds$ = this.dvdService.getDvds();
    this.team$ = this.dvdService.getTeam();
  }

}
