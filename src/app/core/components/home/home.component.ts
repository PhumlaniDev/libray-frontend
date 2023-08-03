import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Book } from '../../interface/books';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../../services/home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(
    private homeService: HomeService,
    private modalService: NgbModal
  ) {
    this.books = new Observable<Book[]>();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.homeService.getBooks();
  }

  saveBook(book: Book): void {
    this.saveBook(book);
  }
}
