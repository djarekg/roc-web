import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberSummaryComponent } from './prescriber-summary.component';

describe('PrescriberSummaryComponent', () => {
  let component: PrescriberSummaryComponent;
  let fixture: ComponentFixture<PrescriberSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
