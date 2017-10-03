import { FormControl } from '@angular/forms';

export function amountValidator(c: FormControl) {
    const amount = c.value;
    let errorType = '';
    if (amount) {
        if (amount < 50) {
            errorType = 'min';
        } else if (amount > 5000) {
            errorType = 'max';
        }
    }
    if (errorType !== '') {
        // If validation fails return details
        return {
            validateAmount: {
                valid: false,
                type: errorType
            }
        };
    } else {
        // else return null
        return null;
    }
}

export function amountRangeValidator(minAmount: number, maxAmount: number) {
    return (c: FormControl) => {
        const amount = c.value;
        let errorType = '';
        let valueExpect: number
        if (amount) {
            if (amount < minAmount) {
                errorType = 'min';
                valueExpect = minAmount;
            } else if (amount > maxAmount) {
                errorType = 'max';
                valueExpect = maxAmount;
            }
        }
        if (errorType !== '') {
            return {
                validateAmount: {
                    valid: false,
                    type: errorType,
                    value: valueExpect
                }
            };
        } else {
            return null;
        }
    };
}

export function amountNotAllowedValidator(notAllowed: number) {
    return (c: FormControl) => {
        const amount = Number(c.value);
        let errorType = '';
        let valueExpect: number
        if (amount) {
            if (amount === Number(notAllowed)) {
                errorType = 'notAllowed';
                valueExpect = notAllowed;
            }
        }
        if (errorType !== '') {
            return {
                validateNotAllowed: {
                    valid: false,
                    type: errorType,
                    value: valueExpect
                }
            };
        } else {
            return null;
        }
    };
}
