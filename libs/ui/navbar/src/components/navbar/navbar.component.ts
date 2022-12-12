import { NgTemplateOutlet } from '@angular/common';
import {
  type AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  type QueryList,
} from '@angular/core';

import { NavbarItemComponent } from '../navbar-item';

@Component({
  selector: 'rw-ui-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class NavbarComponent<T> implements AfterContentInit {
  @ContentChildren(NavbarItemComponent) items!: QueryList<
    NavbarItemComponent<T>
  >;

  ngAfterContentInit(): void {
    this.items.forEach(item => console.log(item));
  }
}
