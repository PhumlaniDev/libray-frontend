import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Book } from '../../interface/books';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(
    private homeService: HomeService,
    private sanitizer: DomSanitizer
  ) {
    this.books = new Observable<Book[]>();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.homeService.getBooks();
  }
}
