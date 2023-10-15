import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforAssignComponent } from './ngfor-assign.component';

describe('NgforAssignComponent', () => {
  let component: NgforAssignComponent;
  let fixture: ComponentFixture<NgforAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
