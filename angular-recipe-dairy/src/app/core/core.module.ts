import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ErrorComponent } from './error/error.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomepageComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavigationComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    LayoutModule,
    SharedModule,

  ],
  providers: [],
  exports: [
    HomepageComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavigationComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
