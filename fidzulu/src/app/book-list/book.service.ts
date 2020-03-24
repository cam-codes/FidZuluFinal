import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../models/book';
import { ApiService } from '../routing-utils/api.service';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnDestroy {

  private sub = new Subscription();
  private location: string;

  constructor(
    private apiService: ApiService,
    private locationService: LocationService
  ) {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.location = location;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getBooks(): Observable<Book[]> {
    return this.apiService.get(`/books/all/${this.location}`);
  }

  getTeam(): Observable<Team> {
    return this.apiService.get('/books/team');
  }
}
