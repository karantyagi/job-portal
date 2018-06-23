import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduationListComponent } from './eduation-list.component';

describe('EduationListComponent', () => {
  let component: EduationListComponent;
  let fixture: ComponentFixture<EduationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
