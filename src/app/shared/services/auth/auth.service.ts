import {Injectable} from "@angular/core";
import {ApiAuthService} from "../api/api-auth.service";
import {User} from "../../interfaces/auth.interface";
import {Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private apiAuth: ApiAuthService
  ) { }

  login(): Observable<any> {
    return this.apiAuth.getCookie().pipe(
      switchMap((responce) => {
        console.log(responce)
        return responce
      })
    )
  }
}
