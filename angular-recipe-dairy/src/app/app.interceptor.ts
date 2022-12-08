import { Injectable, Provider } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../environments/environments'

const apiURL = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if (req.url.startsWith('/')) {
            req = req.clone({ url: req.url.replace("/", apiURL + "/")});
        }

        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}