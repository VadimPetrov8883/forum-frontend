import {Injectable} from "@angular/core";
import {ApiAuthService} from "../api/api-auth.service";
import {User} from "../../interfaces/auth.interface";
import {Observable, of, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private apiAuth: ApiAuthService
  ) { }

  get authenticated():string {
    return localStorage.getItem('authenticated')!;
  }

  login(user: User): Observable<any> {
    return this.apiAuth.getCookie().pipe(
      switchMap(() => {
        return this.apiAuth.login(user).pipe(
          tap(this.setAuth),
          switchMap((response) => {
            return of(response)
            })
        )
      })
    )
  }

  logout(){
    this.setAuth(null);
    return this.apiAuth.logout();
  }

  isAuthenticated(): boolean {
    return !!this.authenticated
  }

  setAuth(authenticate: boolean | null) {
      if (authenticate) {
        localStorage.setItem('authenticated', authenticate.toString())
      } else {
        localStorage.clear()
      }
  }
}
