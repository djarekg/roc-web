import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber-page.component.html',
  styleUrls: ['./prescriber-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export default class PrescriberPageComponent {}
