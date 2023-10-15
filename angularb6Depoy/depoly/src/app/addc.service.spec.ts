import { TestBed } from '@angular/core/testing';

import { AddcService } from './addc.service';

describe('AddcService', () => {
  let service: AddcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
