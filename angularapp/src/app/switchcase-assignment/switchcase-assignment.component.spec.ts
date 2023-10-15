import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcaseAssignmentComponent } from './switchcase-assignment.component';

describe('SwitchcaseAssignmentComponent', () => {
  let component: SwitchcaseAssignmentComponent;
  let fixture: ComponentFixture<SwitchcaseAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchcaseAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcaseAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
