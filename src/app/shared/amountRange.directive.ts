import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { amountRangeValidator } from 'app/shared/customvalidators';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[amountRangeValidate][ngModel]',
    providers: [
        {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => AmountRangeValidatorDirective),
        multi: true
        }
    ]
})
export class AmountRangeValidatorDirective implements Validator {
    validator: Function;

    @Input('amountRangeValidate') set Range([minAmount, maxAmount]: [number, number]) {
        this.validator = amountRangeValidator(minAmount, maxAmount);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    // @Input() minAmount: number;
    // @Input() maxAmount: number;

    // validate(c: FormControl): { [key: string]: any } {
    //     return amountRangeValidator(
    //         this.minAmount,
    //         this.maxAmount)(c)
    // }
}
