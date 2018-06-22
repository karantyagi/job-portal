import { TestBed, inject } from '@angular/core/testing';

import { JobListingService } from './job-listing.service';

describe('JobListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobListingService]
    });
  });

  it('should be created', inject([JobListingService], (service: JobListingService) => {
    expect(service).toBeTruthy();
  }));
});
