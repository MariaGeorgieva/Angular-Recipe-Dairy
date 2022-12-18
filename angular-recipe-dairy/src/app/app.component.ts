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
    this.matIconRegistry.addSvgIcon(
      "category",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/category.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "difficulty",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/difficulty.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ingredients",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ingredients.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "mainIngredient",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/mainIngredient.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "meal",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/meal.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "preparation",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/preparation.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "servings",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/servings.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "time",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/time.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "season",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/season.svg")
    );
  }
}
