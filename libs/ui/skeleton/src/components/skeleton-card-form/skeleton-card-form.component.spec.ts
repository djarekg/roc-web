import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardFormComponent } from './skeleton-card-form.component';

describe('SkeletonCardFormComponent', () => {
  let component: SkeletonCardFormComponent;
  let fixture: ComponentFixture<SkeletonCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkeletonCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
