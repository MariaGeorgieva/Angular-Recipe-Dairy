import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeditRecipeComponent } from './edit-recipe.component';

describe('CeditRecipeComponent', () => {
  let component: CeditRecipeComponent;
  let fixture: ComponentFixture<CeditRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeditRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
