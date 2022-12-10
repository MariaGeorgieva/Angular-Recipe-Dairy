import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, combineLatest, map, Observable, of, switchMap, take, throwError, withLatestFrom, zip } from "rxjs";
import { environment } from '../environments/environments';
import { AuthService } from "./auth/auth.service";
import { API_ERROR } from "./shared/constants";

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router,
    private authService: AuthService
  ) { }

  accessToken: string | null = localStorage.getItem('accessToken');

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log('app interceptor token: ' + accessToken);//have token

    if (this.accessToken) {
      req.clone({
        url: req.url.replace('/', apiURL + '/'),
        setHeaders: { 'X-Authorization': this.accessToken }
      });
    }

    // if (req.url.startsWith('/')) {
    //   req = req.clone({ url: req.url.replace('/', apiURL + '/') })//withCredentials: true 
    // }
    return next.handle(req).pipe(
      catchError(err => of(err).pipe( // combineLatest([err], this.authService.user$).pipe(take(1))
        switchMap((err) => {
          if (err.status === 401) { return [[err, null]] }
          return zip([err], this.authService.user$).pipe(take(1))
        }),
        switchMap(([err, user]) => {
          if (err.status === 401) {
            if (!user) {
              this.router.navigate(['/login']);
            } else {
              this.router.navigate(['/no-permissions']);
            }
          } else {
            this.apiError.next(err);
            this.router.navigate(['/error']);
          }
          return throwError(() => err);
        })
      ))
    );
  }

}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};