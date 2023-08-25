import { TestBed } from '@angular/core/testing';

import { TestfoodserviceService } from './testfoodservice.service';

describe('TestfoodserviceService', () => {
  let service: TestfoodserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestfoodserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
