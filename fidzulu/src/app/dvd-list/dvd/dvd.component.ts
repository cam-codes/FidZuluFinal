import { Component, OnInit, Input } from '@angular/core';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  @Input() dvd: Dvd;

  constructor() { }

  ngOnInit() {
  }

}
