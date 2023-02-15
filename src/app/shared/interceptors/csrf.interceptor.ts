import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpXsrfTokenExtractor
} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  headerName = 'X-XSRF-TOKEN';

  constructor(
    private tokenService: HttpXsrfTokenExtractor
  ) {}

  redirectToLogin() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken()

    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({
        headers: req.headers.append(this.headerName, token)
      })
    } else {
        this.redirectToLogin()
    }

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 419) {
          this.redirectToLogin()
        }
        return throwError(err)
      })
    );
  }

}
