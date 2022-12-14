import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit, OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);

  user$ = this.user$$.asObservable()
    .pipe(filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;

  get isLoggedIn(): boolean {
    return this.user !== null;
  }


  subscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.user$
      .subscribe(user => {
        this.user = user;
      });
  }
  ngOnInit(): void {
    // this.getUserRecipes();
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<IUser>('api/auth/register', { username, email, password, rePassword })
      .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('api/auth/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)));;
  }

  logout() {
    return this.http.post<void>('api/auth/logout', {}, { withCredentials: true })
      .pipe(tap(() => {
        this.user$$.next(null)
      }));
  }

  getProfile() {

    return this.http.get<IUser>('api/user/profile') //if cookies-parser
      .pipe(
        tap(user => {
          this.user$$.next(user)
        }),
        catchError((err) => {
          this.user$$.next(null);
          return of(err); //  send err to next catch
        })
      );
  }

  // getUserRecipes() {
  //   return this.http.get<IUser>('api/user/recipes') //if cookies-parser
  //     .pipe(
  //       tap(user => {
  //         this.user$$.next(user)
  //       }),
  //       catchError((err) => {
  //         this.user$$.next(null);
  //         return of(err); //  send err to next catch
  //       })
  //     );
  // }

  setProfile(username: string, email: string) {
    return this.http.put<IUser>('api/user/profile', { username, email })
      .pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
