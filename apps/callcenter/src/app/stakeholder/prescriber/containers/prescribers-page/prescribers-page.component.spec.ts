import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribersPageComponent } from './prescribers-page.component';

describe('PrescribersPageComponent', () => {
  let component: PrescribersPageComponent;
  let fixture: ComponentFixture<PrescribersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescribersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescribersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
