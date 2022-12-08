import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { isEmpty } from '@roc-web/core/shared';

import { AuthService } from '../services';

@Directive({
  selector: '[rwHasRoles]',
  standalone: true,
})
export class HasRolesDirective {
  readonly #authService = inject(AuthService);
  #hasView = false;
  readonly #templateRef = inject(TemplateRef<unknown>);
  readonly #viewContainer = inject(ViewContainerRef);

  @Input('rwHasRoles')
  set hasRoles(roles: string[] | string | undefined) {
    this.#updateView(roles);
  }

  #updateView(roles: string[] | string | undefined): void {
    const hasRoles = isEmpty(roles) || this.#authService.hasRole(roles);

    if (hasRoles && !this.#hasView) {
      this.#viewContainer.createEmbeddedView(this.#templateRef);
      this.#hasView = true;
    } else if (!hasRoles && this.#hasView) {
      this.#viewContainer.clear();
      this.#hasView = false;
    }
  }
}
