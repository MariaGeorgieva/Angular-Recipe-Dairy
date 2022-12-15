import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //   const { guest } = route.data;
    //   const token = localStorage.getItem('token')
    //   if(!token && guest == true){
    //     return true
    //   }else if(token && guest == false){
    //     return true
    //   }
    //   return this.router.parseUrl('/error');
    // }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.authService.user$.pipe(
        take(1),
        map(user => {
          const loginRequired = route.data['loginRequired'];
          if (loginRequired === undefined || !!user === loginRequired) { return true; }
          const returnUrl = route.url.map(u => u.path).join('/');
          return !!user ?
            this.router.createUrlTree(['/category/'], { queryParams: { returnUrl } }) :
            this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl } });
        })
      );
    }
}