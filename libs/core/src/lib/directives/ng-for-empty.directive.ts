import { NgFor } from '@angular/common';
import {
  Directive,
  type DoCheck,
  type EmbeddedViewRef,
  Input,
  type TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngForEmpty]',
  standalone: true,
  hostDirectives: [
    // to avoid importing ngFor in component provider array
    {
      directive: NgFor,
      // exposing inputs and remapping them
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property, @angular-eslint/no-input-rename
      inputs: ['ngForOf:ngForEmptyOf'],
    },
  ],
})
class NgForEmptyDirective<T> implements DoCheck {
  private vcr = inject(ViewContainerRef);

  // check if list is undefined or empty
  @Input() ngForEmptyOf: T[] | undefined;

  @Input() ngForEmptyElse!: TemplateRef<any>;

  private ref?: EmbeddedViewRef<unknown>;

  ngDoCheck(): void {
    this.ref?.destroy();

    if (!this.ngForEmptyOf || this.ngForEmptyOf.length === 0) {
      this.ref = this.vcr.createEmbeddedView(this.ngForEmptyElse);
    }
  }
}

export { NgForEmptyDirective as NgForEmpty };
