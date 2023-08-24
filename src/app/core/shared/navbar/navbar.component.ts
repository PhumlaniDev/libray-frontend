import { Book } from '../../interface/books';
import { Component } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchBooks: Book[] = [];
  searchQuery: string = '';

  constructor(private homeService: HomeService) {}

  search(): void {
    if (this.searchQuery.trim() === '') {
      return; // Don't search if the query is empty or only contains whitespace
    }

    this.homeService.searchBooks(this.searchQuery).subscribe(
      (result) => {
        this.searchBooks = result;
      },
      (error) => {
        console.error('Error searching books:', error);
      }
    );
  }
}
