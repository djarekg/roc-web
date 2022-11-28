import { type ComponentFixture, TestBed } from '@angular/core/testing';

import PrescriberPageComponent from './prescriber-page.component';

describe('PrescriberPageComponent', () => {
  let component: PrescriberPageComponent;
  let fixture: ComponentFixture<PrescriberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriberPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrescriberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
