import { TestBed } from '@angular/core/testing';

import { MaterialDateService } from './material-date.service';

describe('MaterialDateService', () => {
  let service: MaterialDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
