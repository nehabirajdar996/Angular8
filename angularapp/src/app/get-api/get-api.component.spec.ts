import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIComponent } from './get-api.component';

describe('GetAPIComponent', () => {
  let component: GetAPIComponent;
  let fixture: ComponentFixture<GetAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
