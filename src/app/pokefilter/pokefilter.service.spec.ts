import { TestBed } from '@angular/core/testing';

import { PokefilterService } from './pokefilter.service';

describe('PokefilterService', () => {
  let service: PokefilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokefilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
