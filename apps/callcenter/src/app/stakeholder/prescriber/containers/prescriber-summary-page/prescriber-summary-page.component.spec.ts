import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberSummaryPageComponent } from './prescriber-summary-page.component';

describe('PrescriberSummaryPageComponent', () => {
  let component: PrescriberSummaryPageComponent;
  let fixture: ComponentFixture<PrescriberSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberSummaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
