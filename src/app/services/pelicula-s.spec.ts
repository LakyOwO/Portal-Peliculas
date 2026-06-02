import { TestBed } from '@angular/core/testing';

import { PeliculaS } from './pelicula-s';

describe('PeliculaS', () => {
  let service: PeliculaS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
