import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthday1Component } from './hero-birthday1.component';

describe('HeroBirthday1Component', () => {
  let component: HeroBirthday1Component;
  let fixture: ComponentFixture<HeroBirthday1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBirthday1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBirthday1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
