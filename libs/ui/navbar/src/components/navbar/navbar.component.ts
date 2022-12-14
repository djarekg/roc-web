import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rw-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
