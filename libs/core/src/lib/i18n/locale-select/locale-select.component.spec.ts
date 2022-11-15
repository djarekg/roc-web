import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSelectComponent } from './locale-select.component';

describe('LocaleSelectComponent', () => {
  let component: LocaleSelectComponent;
  let fixture: ComponentFixture<LocaleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
