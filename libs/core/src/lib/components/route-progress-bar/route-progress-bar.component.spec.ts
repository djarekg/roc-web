import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProgressBarComponent } from './route-progress-bar.component';

describe('RouteProgressBarComponent', () => {
  let component: RouteProgressBarComponent;
  let fixture: ComponentFixture<RouteProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouteProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
