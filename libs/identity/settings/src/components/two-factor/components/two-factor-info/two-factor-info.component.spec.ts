import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorInfoComponent } from './two-factor-info.component';

describe('TwoFactorInfoComponent', () => {
  let component: TwoFactorInfoComponent;
  let fixture: ComponentFixture<TwoFactorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TwoFactorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoFactorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
