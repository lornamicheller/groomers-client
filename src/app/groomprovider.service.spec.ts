import { TestBed } from '@angular/core/testing';

import { GroomproviderService } from './groomprovider.service';

describe('GroomproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroomproviderService = TestBed.get(GroomproviderService);
    expect(service).toBeTruthy();
  });
});
