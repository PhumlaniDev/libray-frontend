import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import { HomeClient } from '../clients/home.client';
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService implements CanActivate {
  private token = localStorage.getItem('token')


  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private homeClient: HomeClient
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean
      | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.token) {
      this.router.navigate(['/login']).then(r => console.log(r));
      return false;
    }
    return true;
  }
}
