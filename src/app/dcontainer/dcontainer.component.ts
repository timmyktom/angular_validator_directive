import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcontainer',
  templateUrl: './dcontainer.component.html',
  styleUrls: ['./dcontainer.component.scss']
})
export class DcontainerComponent implements OnInit {

  range = { minAmount: 10, maxAmount: 50 };

  model = {
    amount1: '',
    amount2: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
