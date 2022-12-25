import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[rwRouteContentHeader]',
  standalone: true,
})
class RouteContentHeaderDirective {
  @HostBinding('class') protected readonly classes = 'rw-route-content__header';
}

export { RouteContentHeaderDirective as RouteContentHeader };
