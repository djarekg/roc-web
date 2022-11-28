import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoFactorQrCodeComponent } from './two-factor-qr-code.component';

describe('TwoFactorQrCodeComponent', () => {
  let component: TwoFactorQrCodeComponent;
  let fixture: ComponentFixture<TwoFactorQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoFactorQrCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoFactorQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
