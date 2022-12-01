import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  selector: 'app-prescriber-attestations-detail',
  standalone: true,
  styleUrls: ['./prescriber-attestations-detail.component.scss'],
  templateUrl: './prescriber-attestations-detail.component.html'
})
export class PrescriberAttestationsDetailComponent {

}
