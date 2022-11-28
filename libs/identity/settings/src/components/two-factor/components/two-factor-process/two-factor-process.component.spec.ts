import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorProcessComponent } from './two-factor-process.component';

describe('TwoFactorProcessComponent', () => {
  let component: TwoFactorProcessComponent;
  let fixture: ComponentFixture<TwoFactorProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoFactorProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoFactorProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
