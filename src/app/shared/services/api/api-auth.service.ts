import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {User} from "../../interfaces/auth.interface";

@Injectable({
  providedIn: 'root'
})

export class ApiAuthService {

  constructor(
    private http: HttpClient
  ) { }

  getCookie(): Observable<any> {
    return this.http.get(`${environment.backendUrl}sanctum/csrf-cookie`, {withCredentials: true})
  }

  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.backendUrl}api/login`, user, {withCredentials: true})
  }
}
