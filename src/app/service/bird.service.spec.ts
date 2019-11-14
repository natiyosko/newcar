import { TestBed } from '@angular/core/testing';

import { BirdsService } from './bird.service';

describe('BirdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirdsService = TestBed.get(BirdsService);
    expect(service).toBeTruthy();
  });
});
