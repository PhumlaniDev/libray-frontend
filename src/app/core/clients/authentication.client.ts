import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth/login',
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/auth/register',
      {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
}
