import { Component, OnInit, Input } from '@angular/core';
import { Toy } from 'src/app/models/toy';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.css']
})
export class ToyComponent implements OnInit {

  @Input() toy: Toy;

  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    return Object.keys(this.toy);
  }

}
