import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CurrencyConversionComponent } from '../components/currency-conversion/currency-conversion.component';




@NgModule({
  declarations: [
    CurrencyConversionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CurrencyConversionComponent
  ]
})
export class PageSharedModule { }
