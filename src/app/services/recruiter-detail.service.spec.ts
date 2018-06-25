import { TestBed, inject } from '@angular/core/testing';

import { RecruiterDetailService } from './recruiter-detail.service';

describe('RecruiterDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruiterDetailService]
    });
  });

  it('should be created', inject([RecruiterDetailService], (service: RecruiterDetailService) => {
    expect(service).toBeTruthy();
  }));
});
