import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, filter, of, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);

  user$ = this.user$$.asObservable()
    .pipe(filter((val): val is IUser | null => val !== undefined));

  user: IUser | null = null;

  get isLoggedIn(): boolean {
    console.log('Auth service isLoggedIn()' + this.user?.roles);
    return this.user !== null;
  }


  subscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.user$
      .subscribe(user => {
        this.user = user;
      });
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<IUser>('/auth/register', { username, email, password, rePassword })
      .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<any>('/auth/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)));;
  }

  logout() {
    return this.http.post<void>('/auth/logout', {}, { withCredentials: true })
      .pipe(tap(() => {
        this.user$$.next(null)
      }));
  }

  getProfile() {
    return this.http.get<any>('/user/profile', { withCredentials: true }) //if cookies-parser
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

  setProfile(username: string, email: string) {
    return this.http.put<IUser>('/user/profile', { username, email })
      .pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
