import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rwRouteContent]',
  standalone: true,
})
class RouteContentDirective {
  @HostBinding('class') protected readonly classes = 'rw-route-content';
}

export { RouteContentDirective as RouteContent };
