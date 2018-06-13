import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSeekerComponent } from './profile-seeker.component';

describe('ProfileSeekerComponent', () => {
  let component: ProfileSeekerComponent;
  let fixture: ComponentFixture<ProfileSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
