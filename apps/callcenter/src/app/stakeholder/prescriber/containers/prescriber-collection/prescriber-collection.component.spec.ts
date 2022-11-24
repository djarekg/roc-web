import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriberCollectionComponent } from './prescriber-collection.component';

describe('PrescriberCollectionComponent', () => {
  let component: PrescriberCollectionComponent;
  let fixture: ComponentFixture<PrescriberCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrescriberCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriberCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
