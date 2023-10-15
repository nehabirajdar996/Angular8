import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreactiveformComponent } from './newreactiveform.component';

describe('NewreactiveformComponent', () => {
  let component: NewreactiveformComponent;
  let fixture: ComponentFixture<NewreactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
