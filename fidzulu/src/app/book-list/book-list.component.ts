import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Team } from '../models/team';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  team$: Observable<Team>;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
    this.team$ = this.bookService.getTeam();
  }

}
