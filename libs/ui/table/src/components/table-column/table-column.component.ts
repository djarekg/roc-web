import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { type TableColumn } from '../../shared/models';

@Component({
  selector: 'rw-table-column',
  standalone: true,
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTableModule],
})
export class TableColumnComponent {
  @Input() column: TableColumn | undefined;
}
