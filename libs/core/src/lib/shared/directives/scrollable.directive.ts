import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rwScrollable]',
  standalone: true,
})
class ScrollableDirective {
  @HostBinding('class') protected readonly classes = 'rw-scrollable';
}

export { ScrollableDirective as Scrollable };
