import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComp1Component } from './child-comp1.component';

describe('ChildComp1Component', () => {
  let component: ChildComp1Component;
  let fixture: ComponentFixture<ChildComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
