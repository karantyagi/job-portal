import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateListComponent } from './certificate-list.component';

describe('CertificateListComponent', () => {
  let component: CertificateListComponent;
  let fixture: ComponentFixture<CertificateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
