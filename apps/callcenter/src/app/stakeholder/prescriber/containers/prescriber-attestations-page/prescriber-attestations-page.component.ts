import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prescriber-attestations-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriber-attestations-page.component.html',
  styleUrls: ['./prescriber-attestations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PrescriberAttestationsPageComponent {}
