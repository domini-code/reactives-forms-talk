import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


export function emailMatcher(controlName: string, confirmName: string): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const email = formGroup.controls[controlName];
    const confirmEmail = formGroup.controls[confirmName];

    if (email.value !== confirmEmail.value) {
      confirmEmail.setErrors({ match: true });
    }

    return null;

  }
}
