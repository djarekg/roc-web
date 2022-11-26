import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberListPageComponent } from './prescriber-list-page.component';

describe('PrescriberListPageComponent', () => {
  let component: PrescriberListPageComponent;
  let fixture: ComponentFixture<PrescriberListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
