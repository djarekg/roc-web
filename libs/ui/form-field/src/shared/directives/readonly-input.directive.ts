import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: 'div[rwReadonlyInput], span[rwReadonlyInput]',
  standalone: true,
})
export class ReadonlyInputDirective {
  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  @Input()
  get value(): string {
    return this.#value;
  }
  set value(value: string) {
    this.#value = value;
    this.#renderer.setProperty(this.#elementRef.nativeElement, 'innerText', value);
  }
  #value: string;
}
