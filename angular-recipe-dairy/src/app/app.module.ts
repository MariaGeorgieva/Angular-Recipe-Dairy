import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { RecipeModule } from './recipe/recipe.module';
import { AppInterceptor } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from './shared/shared.module';
import { API_ERROR } from './shared/constants';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticateComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true,
        },
        {
            provide: API_ERROR,
            useValue: new BehaviorSubject(null)
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        AuthModule,
        RecipeModule,
        AppRoutingModule,
        //the child must be under
        BrowserModule,
        //core must be after BrowserModule
        CoreModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        MatSidenavModule
    ]
})
export class AppModule { }
