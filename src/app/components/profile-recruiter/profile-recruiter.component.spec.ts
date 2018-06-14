import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecruiterComponent } from './profile-recruiter.component';

describe('ProfileRecruiterComponent', () => {
  let component: ProfileRecruiterComponent;
  let fixture: ComponentFixture<ProfileRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
