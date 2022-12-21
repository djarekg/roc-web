import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonFormDetailsLoaderComponent } from './skeleton-form-details-loader.component';

describe('SkeletonFormDetailsLoaderComponent', () => {
  let component: SkeletonFormDetailsLoaderComponent;
  let fixture: ComponentFixture<SkeletonFormDetailsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkeletonFormDetailsLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonFormDetailsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
