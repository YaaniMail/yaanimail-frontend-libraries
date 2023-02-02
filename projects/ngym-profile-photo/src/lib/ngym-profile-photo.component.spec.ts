import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgymProfilePhotoComponent } from './ngym-profile-photo.component';

describe('NgymProfilePhotoComponent', () => {
  let component: NgymProfilePhotoComponent;
  let fixture: ComponentFixture<NgymProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgymProfilePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgymProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
