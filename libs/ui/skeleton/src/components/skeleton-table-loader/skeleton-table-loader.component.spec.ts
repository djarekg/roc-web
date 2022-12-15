import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTableLoaderComponent } from './skeleton-table-loader.component';

describe('SkeletonTableLoaderComponent', () => {
  let component: SkeletonTableLoaderComponent;
  let fixture: ComponentFixture<SkeletonTableLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SkeletonTableLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonTableLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
