import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostPageComponent } from './image-post-page.component';

describe('ImagePostPageComponent', () => {
  let component: ImagePostPageComponent;
  let fixture: ComponentFixture<ImagePostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePostPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
