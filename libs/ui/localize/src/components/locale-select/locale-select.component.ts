import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  type OnDestroy,
  type OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { type ControlValueAccessor } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CORE_OPTIONS } from '@roc-web/core';
import { type Locale, TrackByPropertyDirective } from '@roc-web/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'rw-locale-select',
  standalone: true,
  templateUrl: './locale-select.component.html',
  styleUrls: ['./locale-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatSelectModule, TrackByPropertyDirective],
})
export class LocaleSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  readonly #changeDetectorRef = inject(ChangeDetectorRef);
  readonly #coreOptions = inject(CORE_OPTIONS);
  readonly #destroy$ = new Subject<void>();
  readonly #elementRef = inject(ElementRef<HTMLElement>);
  readonly #renderer = inject(Renderer2);

  #disabled = false;
  #value: Locale | undefined;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  #onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  #onTouched = () => {};

  protected locales: Array<Partial<Locale>> | undefined;

  @Input()
  get disabled(): boolean {
    return this.#disabled;
  }
  set disabled(value: boolean | string) {
    this.setDisabledState(value);
  }

  @Input()
  get value(): Locale | undefined {
    return this.#value;
  }
  set value(value: Locale | undefined) {
    this.writeValue(value);
  }

  ngOnInit(): void {
    this.locales = this.#coreOptions?.locales;
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  writeValue(obj: Locale | undefined): void {
    this.#value = obj;
    this.#stateChanged();
  }

  registerOnChange(fn: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.#onTouched = fn;
  }

  setDisabledState(isDisabled: boolean | string): void {
    this.#disabled = coerceBooleanProperty(isDisabled);
    this.#renderer.setProperty(this.#elementRef.nativeElement, 'disabled', this.#disabled);
    this.#stateChanged();
  }

  #stateChanged(): void {
    this.#changeDetectorRef.markForCheck();
  }
}
