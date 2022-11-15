import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberListComponent } from './prescriber-list.component';

describe('PrescriberListComponent', () => {
  let component: PrescriberListComponent;
  let fixture: ComponentFixture<PrescriberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
