import { Component } from '@angular/core';
//svg 
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "recipes",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/recipes.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "cook-book",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/cook-book.svg")
    );
  }
}
