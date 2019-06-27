import { TestBed } from '@angular/core/testing';

import { FcmserviceService } from './fcmservice.service';

describe('FcmserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FcmserviceService = TestBed.get(FcmserviceService);
    expect(service).toBeTruthy();
  });
});
