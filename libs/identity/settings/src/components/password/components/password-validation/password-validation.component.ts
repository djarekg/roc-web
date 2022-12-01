import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { type FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { type Subscription } from 'rxjs';

type ValidStates = 'error' | 'pristine' | 'success';
type ValidationIcons = 'check' | 'priority_high' | 'question_mark';
type ValidationColors = 'accent' | 'success' | 'warn';

interface ValidationState {
  color: ValidationColors;
  icon: ValidationIcons;
}

const validationState: Record<ValidStates, ValidationState> = {
  error: { color: 'warn', icon: 'priority_high' },
  pristine: { color: 'accent', icon: 'question_mark' },
  success: { color: 'success', icon: 'check' },
};

const SPECIAL_CHARACTER_NAME = 'specialCharacter';
const NUMERIC_CHARACTER_NAME = 'numericCharacter';
const MIN_LENGTH_NAME = 'minlength';

function setValidationState(
  control: FormControl,
  validator: string
): ValidationState {
  if (control.errors?.[validator]) {
    return validationState.error;
  }

  return validationState.success;
}

function hasChanged(control: FormControl): boolean {
  return control.invalid && (control.dirty || control.touched);
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatChipsModule, MatIconModule],
  selector: 'rw-settings-password-validation',
  standalone: true,
  styleUrls: ['./password-validation.component.scss'],
  templateUrl: './password-validation.component.html',
})
export class PasswordValidationComponent {
  #changeDetectorRef = inject(ChangeDetectorRef);
  #control: FormControl | null = null;
  #statusChangesSubscription: Subscription | undefined;

  protected minLengthState: ValidationState = validationState.pristine;
  protected numericCharacterState: ValidationState = validationState.pristine;
  protected specialCharacterState: ValidationState = validationState.pristine;

  @Input()
  get control(): FormControl | null {
    return this.#control;
  }
  set control(value: FormControl | null) {
    if (this.#statusChangesSubscription) {
      this.#statusChangesSubscription.unsubscribe();
    }

    this.#control = value;

    this.#statusChangesSubscription = this.#control?.statusChanges.subscribe(
      () => {
        const control = this.#control;

        if (!control) {
          return;
        }

        if (control?.pristine && control?.untouched) {
          this.#resetValidationStates(validationState.pristine);
        } else if (hasChanged(control)) {
          setValidationState(control, MIN_LENGTH_NAME);
          setValidationState(control, NUMERIC_CHARACTER_NAME);
          setValidationState(control, SPECIAL_CHARACTER_NAME);
        } else {
          this.#resetValidationStates(validationState.success);
        }

        this.#changeDetectorRef.markForCheck();
      }
    );
  }

  #resetValidationStates(state: ValidationState): void {
    this.minLengthState = state;
    this.numericCharacterState = state;
    this.specialCharacterState = state;
  }
}
