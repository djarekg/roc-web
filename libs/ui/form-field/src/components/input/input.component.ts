import { type BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  type OnChanges,
  type OnDestroy,
  Output,
  inject,
} from '@angular/core';
import { type ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';

export const INPUT_CLASS = 'rw-input';

export type InputValueType = boolean | number | string | null | undefined;

@Component({
  selector: 'rw-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: InputComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, NgIf, ReactiveFormsModule],
})
export class InputComponent
  implements MatFormFieldControl<InputValueType>, ControlValueAccessor, OnDestroy, OnChanges
{
  static nextId = 0;

  readonly #elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  readonly controlType = 'rw-input';
  protected readonly formField = inject(MAT_FORM_FIELD, { optional: true });
  protected readonly inputValueAccessor = inject(MAT_INPUT_VALUE_ACCESSOR, { optional: true, self: true });
  readonly ngControl = inject(NgControl, { optional: true, self: true });
  readonly stateChanges = new Subject<void>();

  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;

  errorState: boolean = false;
  focused: boolean = false;

  get empty() {
    return !this.value;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  @Input()
  get disabled(): boolean {
    return this.#disabled;
  }
  set disabled(value: BooleanInput) {
    this.#disabled = coerceBooleanProperty(value);

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  #disabled = false;

  @Input()
  get placeholder(): string {
    return this.#placeholder;
  }
  set placeholder(value: string) {
    this.#placeholder = value;
    this.stateChanges.next();
  }
  #placeholder = '';

  @Input()
  get readonly(): boolean {
    return this.#readonly;
  }
  set readonly(value: BooleanInput) {
    this.#readonly = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  #readonly = false;

  @Input()
  get required(): boolean {
    return this.#required;
  }
  set required(value: BooleanInput) {
    this.#required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  #required = false;

  @Input()
  get value(): InputValueType {
    return this.ngControl?.control?.value;
  }
  set value(value: InputValueType) {
    this.ngControl?.control?.setValue(value, { emitEvent: false });
    this.stateChanges.next();
  }

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() change = new EventEmitter<unknown>();

  @HostBinding('class') readonly classes = INPUT_CLASS;
  @HostBinding('id') readonly id = `rw-input-${InputComponent.nextId++}`;

  constructor() {
    this.inputValueAccessor ??= this.#elementRef.nativeElement as any;
  }

  focus(options?: FocusOptions): void {
    this.#elementRef.nativeElement.focus(options);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onContainerClick(event: MouseEvent): void {
    if (!this.focused) {
      this.focus();
    }
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
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
