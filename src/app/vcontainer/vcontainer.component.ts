import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { amountStaticValidator, amountRangeValidator, amountNotAllowedValidator } from 'app/shared/customvalidators';


@Component({
  selector: 'app-vcontainer',
  templateUrl: './vcontainer.component.html',
  styleUrls: ['./vcontainer.component.scss']
})
export class VcontainerComponent implements OnInit {
  form1: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form1 = new FormGroup({
      amount1: new FormControl(null,
        [Validators.required,
        Validators.pattern(/^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/.source),
        amountStaticValidator]),
      amount2: new FormControl(null,
        [Validators.required,
        Validators.pattern(/^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/.source),
        amountNotAllowedValidator(50),
        amountRangeValidator(10, 10000)])
    });
  }

}
