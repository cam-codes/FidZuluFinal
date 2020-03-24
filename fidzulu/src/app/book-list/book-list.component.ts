import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from './book.service';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../models/book';
import { Team } from '../models/team';
import { LocationService } from '../routing-utils/location.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  private sub = new Subscription();
  books$: Observable<Book[]>;
  team$: Observable<Team>;

  constructor(
    private bookService: BookService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.sub.add(this.locationService.location$.subscribe(location => {
      this.books$ = this.bookService.getBooks();
      this.team$ = this.bookService.getTeam();
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
