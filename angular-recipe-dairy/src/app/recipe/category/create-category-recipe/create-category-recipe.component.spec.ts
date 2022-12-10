import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryRecipeComponent } from './create-category-recipe.component';

describe('CreateCategoryRecipeComponent', () => {
  let component: CreateCategoryRecipeComponent;
  let fixture: ComponentFixture<CreateCategoryRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoryRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
