import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucralDirectiveAssignComponent } from './strucral-directive-assign.component';

describe('StrucralDirectiveAssignComponent', () => {
  let component: StrucralDirectiveAssignComponent;
  let fixture: ComponentFixture<StrucralDirectiveAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrucralDirectiveAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucralDirectiveAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
