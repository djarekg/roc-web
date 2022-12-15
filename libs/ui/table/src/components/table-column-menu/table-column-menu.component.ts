import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'rw-table-column-menu',
  standalone: true,
  templateUrl: './table-column-menu.component.html',
  styleUrls: ['./table-column-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTableModule],
})
export class TableColumnMenuComponent {
  @Output() readonly edit = new EventEmitter<string>();
  @Output() readonly view = new EventEmitter<string>();

  protected onEdit(id: string): void {
    this.edit.emit(id);
  }

  protected onView(id: string): void {
    this.view.emit(id);
  }
}
