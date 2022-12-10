import { NgIf } from '@angular/common';
import { Directive, Input, inject } from '@angular/core';

import { type Roles } from '../enums';
import { AuthService } from '../services';

@Directive({
  selector: '[rwIfHasRole]',
  hostDirectives: [
    {
      directive: NgIf,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['ngIfElse: rwIfHasRoleElse'],
    },
  ],
  standalone: true,
})
export class IfHasRoleDirective {
  readonly #ngIfDirective = inject(NgIf);
  readonly #authService = inject(AuthService);

  @Input('rwIfHasRole')
  set role(role: Roles | undefined) {
    this.#ngIfDirective.ngIf = role && this.#authService.hasRole(role);
  }
}

export { IfHasRoleDirective as RwIfHasRole };
