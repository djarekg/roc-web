import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberAttestationsDetailComponent } from './prescriber-attestations-detail.component';

describe('PrescriberAttestationsDetailComponent', () => {
  let component: PrescriberAttestationsDetailComponent;
  let fixture: ComponentFixture<PrescriberAttestationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberAttestationsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberAttestationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
