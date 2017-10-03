import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { amountNotAllowedValidator } from 'app/shared/customvalidators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[amountNotAllowedValidate][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AmountNotAllowedValidatorDirective),
      multi: true
    }
  ]
})
export class AmountNotAllowedValidatorDirective implements Validator {

  @Input() amountNotAllowedValidate: number;

  validate(control: FormControl): { [key: string]: any } {
    return amountNotAllowedValidator(this.amountNotAllowedValidate)(control);
  }
}
