import { TestBed } from '@angular/core/testing';

import { FTGApiService } from './ftg-api.service';

describe('FTGApiService', () => {
  let service: FTGApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FTGApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
