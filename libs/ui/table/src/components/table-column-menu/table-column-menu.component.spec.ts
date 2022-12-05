import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnMenuComponent } from './table-column-menu.component';

describe('TableColumnMenuComponent', () => {
  let component: TableColumnMenuComponent;
  let fixture: ComponentFixture<TableColumnMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TableColumnMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColumnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
