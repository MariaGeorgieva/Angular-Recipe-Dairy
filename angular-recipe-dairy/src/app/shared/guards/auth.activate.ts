import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthActivate implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user$.pipe( //get user or null
            take(1), //check first value of stream and stop
            map(user => {

                // return this.router.parseUrl('/error');
                const loginRequired = route.data['loginRequired']; //check does need credentials for route
                const accessToken = localStorage.getItem('accessToken')
                console.log("AuthActivate loginRequired: " + loginRequired);

                //have token
                console.log("AuthActivate storage token :" + localStorage.getItem('accessToken'));


                if (!accessToken && loginRequired == true) {
                    return true;
                } else if (accessToken && loginRequired == false) {
                    return true;
                } else if (loginRequired === undefined || !!user === loginRequired) {
                    return true;
                }
                return this.router.parseUrl('/error');
                // const returnUrl = route.url.map(u => u.path).join('/');

                // return !!user ?
                //     this.router.createUrlTree(['/'], { queryParams: { returnUrl } }) : //have user
                //     this.router.createUrlTree(['/login'], { queryParams: { returnUrl } }); //don't have user
            })
        );
    }

}