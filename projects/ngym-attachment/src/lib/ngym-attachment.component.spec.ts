import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgymAttachmentComponent } from './ngym-attachment.component';

describe('NgymAttachmentComponent', () => {
  let component: NgymAttachmentComponent;
  let fixture: ComponentFixture<NgymAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgymAttachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgymAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
