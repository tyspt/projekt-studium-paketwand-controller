import { TestBed } from '@angular/core/testing';

import { PywebviewService } from './pywebview.service';

describe('PywebviewReadyService', () => {
  let service: PywebviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PywebviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
