import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AmountValidatorDirective } from 'app/shared/amountStatic.directive';
import { AmountRangeValidatorDirective } from 'app/shared/amountRange.directive';
import { AmountNotAllowedValidatorDirective } from 'app/shared/amountNotAllowed.directive';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { VcontainerComponent } from './vcontainer/vcontainer.component';
import { DcontainerComponent } from './dcontainer/dcontainer.component';





@NgModule({
  declarations: [
    AppComponent,
    VcontainerComponent,
    DcontainerComponent,
    AmountValidatorDirective,
    AmountRangeValidatorDirective,
    AmountNotAllowedValidatorDirective
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
