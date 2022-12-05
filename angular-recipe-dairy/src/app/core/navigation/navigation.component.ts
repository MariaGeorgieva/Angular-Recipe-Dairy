import { Component } from '@angular/core';
// import {
//   ChangeDetectionStrategy,
//   Component,
//   Inject,
//   PLATFORM_ID,
// } from '@angular/core';
// import { filter, map, pairwise, throttleTime, switchMap } from 'rxjs/operators';

// import { fromEvent, of } from 'rxjs';
// import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  // scrollUp$ = of(isPlatformBrowser(this.platformId)).pipe(
  //   filter(isBrowser => isBrowser),
  //   switchMap(() => fromEvent(document, 'scroll')),
  //   throttleTime(50),
  //   map(() => window.scrollY),
  //   pairwise(),
  //   map(([prevScrollY, currentScrollY]) => prevScrollY > currentScrollY)
  // );

  // constructor(@Inject(PLATFORM_ID) private platformId: object) {}
}
