import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStepComponent } from './header-step.component';

describe('HeaderStepComponent', () => {
  let component: HeaderStepComponent;
  let fixture: ComponentFixture<HeaderStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
