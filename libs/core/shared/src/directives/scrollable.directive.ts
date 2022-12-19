import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rwScrollable]',
  standalone: true,
})
export class ScrollableDirective {
  @HostBinding('class') readonly classes = 'rw-scrollable';
}
