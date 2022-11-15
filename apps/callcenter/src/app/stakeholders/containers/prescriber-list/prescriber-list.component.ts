import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescriber-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriber-list.component.html',
  styleUrls: ['./prescriber-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriberListComponent {

}
