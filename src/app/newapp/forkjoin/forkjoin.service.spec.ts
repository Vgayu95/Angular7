import { TestBed } from '@angular/core/testing';

import { ForkjoinService } from './forkjoin.service';

describe('ForkjoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForkjoinService = TestBed.get(ForkjoinService);
    expect(service).toBeTruthy();
  });
});
