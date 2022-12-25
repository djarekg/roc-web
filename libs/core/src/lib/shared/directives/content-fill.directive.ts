import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rwContentFill]',
  standalone: true,
})
class ContentFillDirective {
  @HostBinding('class') protected readonly classes = 'rw-content-fill';
}

export { ContentFillDirective as ContentFill };
