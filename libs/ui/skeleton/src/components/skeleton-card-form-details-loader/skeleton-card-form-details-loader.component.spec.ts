import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCardFormDetailsLoaderComponent } from './skeleton-card-form-details-loader.component';

describe('SkeletonCardFormDetailsLoaderComponent', () => {
  let component: SkeletonCardFormDetailsLoaderComponent;
  let fixture: ComponentFixture<SkeletonCardFormDetailsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkeletonCardFormDetailsLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonCardFormDetailsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
