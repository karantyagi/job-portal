import { TestBed, inject } from '@angular/core/testing';

import { JobPostingService } from './job-posting.service';

describe('JobPostingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobPostingService]
    });
  });

  it('should be created', inject([JobPostingService], (service: JobPostingService) => {
    expect(service).toBeTruthy();
  }));
});
