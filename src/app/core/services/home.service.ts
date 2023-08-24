import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { Book } from '../interface/books';
import { HomeClient } from '../clients/home.client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService implements CanActivate {
  private token = localStorage.getItem('token');

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private homeClient: HomeClient
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.token) {
      this.router.navigate(['/login']).then((r) => console.log(r));
      return false;
    }
    return true;
  }

  getBooks(): Observable<Book[]> {
    return this.homeClient.getBooks();
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.homeClient.searchBooks(query);
  }

  saveBook(book: Book): Observable<Book> {
    return this.homeClient.saveBook(book);
  }
}
