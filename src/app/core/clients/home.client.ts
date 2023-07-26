import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Book } from '../interface/books';

@Injectable({
  providedIn: 'root',
})
export class HomeClient {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if the user is authorized to access this route
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']).then((r) => console.log(r));
      return false;
    }
    return true;
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/books`);
  }
}
