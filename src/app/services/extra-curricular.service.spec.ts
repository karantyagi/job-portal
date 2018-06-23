import { TestBed, inject } from '@angular/core/testing';

import { ExtraCurricularService } from './extra-curricular.service';

describe('ExtraCurricularService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraCurricularService]
    });
  });

  it('should be created', inject([ExtraCurricularService], (service: ExtraCurricularService) => {
    expect(service).toBeTruthy();
  }));
});
