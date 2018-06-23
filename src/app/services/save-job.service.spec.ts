import { TestBed, inject } from '@angular/core/testing';

import { SaveJobService } from './save-job.service';

describe('SaveJobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveJobService]
    });
  });

  it('should be created', inject([SaveJobService], (service: SaveJobService) => {
    expect(service).toBeTruthy();
  }));
});
