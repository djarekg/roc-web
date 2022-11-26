import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberAttestationsPageComponent } from './prescriber-attestations-page.component';

describe('PrescriberAttestationsPageComponent', () => {
  let component: PrescriberAttestationsPageComponent;
  let fixture: ComponentFixture<PrescriberAttestationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberAttestationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberAttestationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
