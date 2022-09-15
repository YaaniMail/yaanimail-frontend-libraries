import { TestBed } from '@angular/core/testing';

import { NgymAttachmentService } from './ngym-attachment.service';

describe('NgymAttachmentService', () => {
  let service: NgymAttachmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgymAttachmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
