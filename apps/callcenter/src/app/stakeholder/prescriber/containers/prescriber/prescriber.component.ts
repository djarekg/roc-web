import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { PushModule } from '@ngrx/component';
import { Store } from '@ngrx/store';

import { ScrollableDirective, selectTitle } from '@roc-web/core';

@Component({
  selector: 'app-prescriber',
  standalone: true,
  templateUrl: './prescriber.component.html',
  styleUrls: ['./prescriber.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDividerModule, PushModule, RouterOutlet],
  hostDirectives: [ScrollableDirective],
})
export class PrescriberComponent {
  protected title$ = inject(Store).select(selectTitle);
}
