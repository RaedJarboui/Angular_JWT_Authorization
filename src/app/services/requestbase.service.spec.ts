import { TestBed } from '@angular/core/testing';

import { RequestbaseService } from './requestbase.service';

describe('RequestbaseService', () => {
  let service: RequestbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
