import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComp2Component } from './child-comp2.component';

describe('ChildComp2Component', () => {
  let component: ChildComp2Component;
  let fixture: ComponentFixture<ChildComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
