import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prescriber-detail',
  standalone: true,
  templateUrl: './prescriber-detail.component.html',
  styleUrls: ['./prescriber-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PrescriberDetailComponent {}
