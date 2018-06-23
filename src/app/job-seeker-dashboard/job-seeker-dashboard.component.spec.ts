import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerDashboardComponent } from './job-seeker-dashboard.component';

describe('JobSeekerDashboardComponent', () => {
  let component: JobSeekerDashboardComponent;
  let fixture: ComponentFixture<JobSeekerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSeekerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
