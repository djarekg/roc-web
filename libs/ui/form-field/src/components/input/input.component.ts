import { FocusMonitor } from '@angular/cdk/a11y';
import { type BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  type OnChanges,
  type OnDestroy,
  type SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import {
  type ControlValueAccessor,
  FormBuilder,
  FormControl,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_FORM_FIELD, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';

export const INPUT_CLASS = 'rw-input';

export abstract class ValueInputBase<T> extends FormControl {
  readonly: boolean;

  constructor(value: T, readonly: boolean) {
    super(value);
    this.readonly = readonly;
  }
}

export type InputValueType = boolean | number | string | null | undefined;

interface InputForm {
  valueInput: FormControl<InputValueType>;
}

@Component({
  selector: 'rw-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: InputComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, NgIf, ReactiveFormsModule],
})
export class InputComponent
  implements ControlValueAccessor, MatFormFieldControl<InputValueType>, OnDestroy, OnChanges
{
  static nextId = 0;

  #disabled = false;
  #placeholder = '';
  #readonly = false;
  #required = false;

  readonly #focusMonitor = inject(FocusMonitor);
  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  protected readonly formField = inject(MAT_FORM_FIELD, { optional: true });
  protected readonly form = inject(FormBuilder).group<InputForm>({
    valueInput: new FormControl<InputValueType>(null),
  });

  readonly controlType = 'rw-input';
  focused = false;
  readonly ngControl: NgControl | null = inject(NgControl, {
    optional: true,
    self: true,
  });
  readonly stateChanges = new Subject<void>();
  touched = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  get empty() {
    return !this.form.controls?.valueInput;
  }

  get errorState(): boolean {
    return this.form.invalid && this.touched;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  get disabled(): boolean {
    return this.#disabled;
  }
  set disabled(value: BooleanInput) {
    this.#disabled = coerceBooleanProperty(value);
    this.#disabled ? this.form.disable() : this.form.enable();
    this.stateChanges.next();
  }

  @Input()
  get placeholder(): string {
    return this.#placeholder;
  }
  set placeholder(value: string) {
    this.#placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get readonly(): boolean {
    return this.#readonly;
  }
  set readonly(value: BooleanInput) {
    this.#readonly = coerceBooleanProperty(value);

    if (this.#readonly) {
      if (!this.form.contains('readonlyInput')) {
      }
    }

    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this.#required;
  }
  set required(value: BooleanInput) {
    this.#required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  @Input()
  get value(): InputValueType {
    return this.form.valid ? this.form.controls.valueInput.value : null;
  }
  set value(value: InputValueType) {
    this.form.setValue({ valueInput: value });
    this.stateChanges.next();
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-describedby') userAriaDescribedBy: string;

  @ViewChild('input') input: HTMLInputElement | undefined;

  @HostBinding('class') readonly classes = INPUT_CLASS;
  @HostBinding('attr.aria-describedby') readonly describedBy = this.formField?.getLabelId();
  @HostBinding('formGroup') readonly formGroup = this.form;
  @HostBinding('id') readonly id = `rw-input-${InputComponent.nextId++}`;
  @HostBinding('attr.role') readonly role = 'group';

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['readonly']) {
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.#focusMonitor.stopMonitoring(this.#elementRef);
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(_event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    if (!this.#elementRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this.#elementRef.nativeElement.querySelector(`.${INPUT_CLASS}`);

    controlElement?.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    if (!this.readonly && this.input && this.form.controls.valueInput.valid) {
      this.#focusMonitor.focusVia(this.input, 'program');
    }
  }

  writeValue(value: InputValueType): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
