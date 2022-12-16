import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryRecipesComponent } from './all-category-recipes.component';

describe('AllCategoryRecipesComponent', () => {
  let component: AllCategoryRecipesComponent;
  let fixture: ComponentFixture<AllCategoryRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCategoryRecipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCategoryRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
