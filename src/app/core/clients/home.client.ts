import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";

import {AuthenticationService} from "../services/authentication.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class HomeClient {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if the user is authorized to access this route
    if (!this.authService.getToken()) {
      this.router.navigate(['/login'])
        .then(r => console.log(r));
      return false;
    }
    return true;
  }

  getHomeData():Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/home`);
  }
}
