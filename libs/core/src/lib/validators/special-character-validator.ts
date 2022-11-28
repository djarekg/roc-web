import { type AbstractControl, type ValidationErrors, type ValidatorFn } from '@angular/forms';

const HAS_SPECIAL_CHARACTER_REGEX = /(?=.*[!@#$%^&*])/;

export function specialCharacterValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = HAS_SPECIAL_CHARACTER_REGEX.test(control.value);
    return valid ? null : { specialCharacter: { value: control.value } };
  };
}
