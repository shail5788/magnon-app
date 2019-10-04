import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradiantCardComponent } from './gradiant-card.component';

describe('GradiantCardComponent', () => {
  let component: GradiantCardComponent;
  let fixture: ComponentFixture<GradiantCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradiantCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradiantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
