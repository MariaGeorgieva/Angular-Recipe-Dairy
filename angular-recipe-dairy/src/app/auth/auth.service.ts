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

  get isLoggedIn(): boolean{
    console.log('get isLoggedIn()' + this.user);
    
    return this.user !== null;
  }
  // get isLoggedIn(): boolean {
  //   if (this.user) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  subscription: Subscription;

  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.user$
      .subscribe(user => {
        localStorage.getItem('accessToken');
        this.user = user;
      });
  }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<IUser>('/auth/register', { username, email, password, rePassword })
      .pipe(tap(user => this.user$$.next(user)));
  }


  login(email: string, password: string) {
    return this.http.post<IUser>('/auth/login', { email, password })
           .pipe(tap((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('accessToken', JSON.stringify(user));
        this.user$$.next(user);

        return user;
      }));
    // }

  }

  logout() {
    return this.http.get<void>('/auth/logout')
      .pipe(tap(() => {
        localStorage.removeItem('accessToken');
        localStorage.clear();//not now does it needed
        this.user$$.next(null)
      }));
  }

  getProfile() {
    return this.http.get<IUser>('/user/profile')//{withCredentials:true} if cookies-parser
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
