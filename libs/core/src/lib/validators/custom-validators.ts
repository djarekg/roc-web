import { ValidatorFn } from '@angular/forms';

import { equalToValidator } from './equal-to-validator';
import { numericCharacterValidator } from './numeric-character-validator';
import { specialCharacterValidator } from './special-character-validator';

export class CustomValidators {
  static equalTo(value: string, reverse: boolean = false): ValidatorFn {
    return equalToValidator(value, reverse);
  }

  static numericCharacter(): ValidatorFn {
    return numericCharacterValidator();
  }

  static specialCharacter(): ValidatorFn {
    return specialCharacterValidator();
  }
}
