import { AuthenticationClient } from '../clients/authentication.client';
import {HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  login(
    email: string, 
    password: string
    ): void {
      console.log(`Login Page: ${this.tokenKey}`)
    this.authenticationClient
    .login(email, password)
    .subscribe((token) => {
      localStorage.setItem(this.tokenKey, token);
      console.log(token)
      this.router.navigate(['/home']).then(r => console.log(r));
    });

  }

  register(
    firstName: string,
    lastName:string, 
    email: string, 
    password: string
    ): void {
    console.log(`Register Page: ${this.tokenKey}`)
    this.authenticationClient
      .register(firstName, lastName, email, password)
      .subscribe((token) => {
        localStorage.setItem(this.tokenKey, token);
        console.log(token);
        this.router.navigate(['/login']).then((r) => console.log(r));
      });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']).then(r => console.log(r));
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  getHeader(){
    return new HttpHeaders().set("Authorization", `Bearer ${
      localStorage.getItem(this.tokenKey)
    }`)
  }

  getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
