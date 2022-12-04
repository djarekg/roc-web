import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prescriber-attestations-detail',
  standalone: true,
  templateUrl: './prescriber-attestations-detail.component.html',
  styleUrls: ['./prescriber-attestations-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PrescriberAttestationsDetailComponent {}
