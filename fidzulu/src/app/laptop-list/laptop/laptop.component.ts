import { Component, OnInit, Input } from '@angular/core';
import { Laptop } from 'src/app/models/laptop';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  @Input() laptop: Laptop;

  constructor() { }

  ngOnInit() {
  }

}
