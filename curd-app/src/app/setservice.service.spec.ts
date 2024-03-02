import { TestBed } from '@angular/core/testing';

import { SetserviceService } from './setservice.service';

describe('SetserviceService', () => {
  let service: SetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
