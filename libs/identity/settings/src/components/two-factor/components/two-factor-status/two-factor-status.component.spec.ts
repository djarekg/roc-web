import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorStatusComponent } from './two-factor-status.component';

describe('TwoFactorStatusComponent', () => {
  let component: TwoFactorStatusComponent;
  let fixture: ComponentFixture<TwoFactorStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TwoFactorStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoFactorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
