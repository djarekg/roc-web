import { NgForOf } from '@angular/common';
import { Directive, Input, inject } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngForTrackByProperty]',
  standalone: true,
})
class TrackByPropertyDirective {
  readonly #ngFor = inject(NgForOf<unknown>, { host: true });
  #propertyName: string = '';

  constructor() {
    this.#ngFor.ngForTrackBy = (index: number, item: any) =>
      this.propertyName ? item[this.propertyName] : item;
  }

  @Input('ngForTrackByProperty')
  set propertyName(value: string | null) {
    this.#propertyName = value ?? '';
  }
}

export { TrackByPropertyDirective as TrackByProperty };
