import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function equalToValidator(
  value: string,
  reverse: boolean = false
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const equalToControl = control.get(value);

    if (reverse) {
      equalToControl?.updateValueAndValidity();
      return null;
    }

    const isEqual = control.value === equalToControl?.value;

    return isEqual
      ? null
      : { equalTo: { control: equalToControl, value: equalToControl?.value } };
  };
}
