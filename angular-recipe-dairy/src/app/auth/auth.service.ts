import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
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

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
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
    return this.http.post<IUser>('/auth/login', { email, password })
      // .pipe(tap(user =>
      //   // this.setToken(this.user),
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //   localStorage.setItem('user', JSON.stringify('user'));
      //   this.user$$.next(this.user);
      // );
      .pipe(tap(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        
        this.user$$.next(user);
        return user;
      }));
    // }

  }

  logout() {
    return this.http.get<void>('/auth/logout')
      .pipe(tap(() => {
        localStorage.removeItem('user');
        this.user$$.next(null)
      }));
  }

  // setToken(accessToken: string): void {
  //   return localStorage.setItem('accessToken', accessToken);
  // }

  // getToken() {
  //   return localStorage.getItem('accessToken');
  // }

  getProfile() {
    return this.http.get<IUser>('/user/profile')//{withCredentials:true} cookies 
      .pipe(
        tap(user => this.user$$.next(user)),
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
