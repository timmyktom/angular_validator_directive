import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { amountValidator } from 'app/shared/customvalidators';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[amountValidate]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => AmountValidatorDirective),
        multi: true }]
})
export class AmountValidatorDirective implements Validator {
    validator: Function;
    constructor() {
        this.validator = amountValidator;
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}
