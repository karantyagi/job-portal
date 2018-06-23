import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCurricularListComponent } from './extra-curricular-list.component';

describe('ExtraCurricularListComponent', () => {
  let component: ExtraCurricularListComponent;
  let fixture: ComponentFixture<ExtraCurricularListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraCurricularListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraCurricularListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
