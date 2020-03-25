import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locationSubject = new BehaviorSubject<string>(environment.defaultLocation);
  location$: Observable<string> = this.locationSubject;

  constructor() { }

  changeLocation(location: string) {
    console.log("Sending location: " + location);
    this.locationSubject.next(location);
  }
}
