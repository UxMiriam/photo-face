import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPhotosComponent } from './validation-photos.component';

describe('ValidationPhotosComponent', () => {
  let component: ValidationPhotosComponent;
  let fixture: ComponentFixture<ValidationPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
