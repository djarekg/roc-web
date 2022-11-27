import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescriber-attestations-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriber-attestations-detail.component.html',
  styleUrls: ['./prescriber-attestations-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrescriberAttestationsDetailComponent {

}
