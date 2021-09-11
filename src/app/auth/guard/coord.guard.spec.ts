import { TestBed } from '@angular/core/testing';

import { CoordGuard } from './coord.guard';

describe('CoordGuard', () => {
  let guard: CoordGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoordGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
