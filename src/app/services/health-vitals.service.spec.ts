import { TestBed } from '@angular/core/testing';

import { HealthVitalsService } from './health-vitals.service';

describe('HealthVitalsService', () => {
  let service: HealthVitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthVitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
