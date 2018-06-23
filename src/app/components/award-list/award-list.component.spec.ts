import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardListComponent } from './award-list.component';

describe('AwardListComponent', () => {
  let component: AwardListComponent;
  let fixture: ComponentFixture<AwardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
