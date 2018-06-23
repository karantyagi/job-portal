import { TestBed, inject } from '@angular/core/testing';

import { AwardService } from './award.service';

describe('AwardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwardService]
    });
  });

  it('should be created', inject([AwardService], (service: AwardService) => {
    expect(service).toBeTruthy();
  }));
});
