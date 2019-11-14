import { TestBed } from '@angular/core/testing';

import { WildsService } from './wild.service';

describe('WildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildsService = TestBed.get(WildsService);
    expect(service).toBeTruthy();
  });
});
