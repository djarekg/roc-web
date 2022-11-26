import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescriber-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriberDetailComponent {

}
