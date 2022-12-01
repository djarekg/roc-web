import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'app-prescriber-detail',
  standalone: true,
  styleUrls: ['./prescriber-detail.component.scss'],
  templateUrl: './prescriber-detail.component.html'
})
export class PrescriberDetailComponent {

}
