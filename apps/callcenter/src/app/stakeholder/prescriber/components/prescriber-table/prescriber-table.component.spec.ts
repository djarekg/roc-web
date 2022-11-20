import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberTableComponent } from './prescriber-table.component';

describe('PrescriberTableComponent', () => {
  let component: PrescriberTableComponent;
  let fixture: ComponentFixture<PrescriberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
