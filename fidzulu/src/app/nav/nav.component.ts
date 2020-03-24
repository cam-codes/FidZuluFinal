import { Component, OnInit } from '@angular/core';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private currentLocation: string = "Raleigh";
  private locations: string[] = ["Raleigh", "Durham"];

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  onLocationChange(location: string) {
    this.locationService.changeLocation(location);
  }

}
