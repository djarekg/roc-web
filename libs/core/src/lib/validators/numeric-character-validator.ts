import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const HAS_NUMERIC_CHARACTER_REGEX = /.*[0-9].*/;

export function numericCharacterValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = HAS_NUMERIC_CHARACTER_REGEX.test(control.value);
    return valid ? null : { numericCharacter: { value: control.value } };
  };
}
