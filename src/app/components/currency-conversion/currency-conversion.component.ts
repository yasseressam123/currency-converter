import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/app-service.service';
import {InputSearch} from './input-search';


@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit {

  currencySymbols:Array<any> = [];
  toCurrencySymbols:Array<any> = [];
  InputsValue:InputSearch = {
    from:"" ,
    to:"",
    amount:"1"
  };
  amoutDisable:boolean = true;
  buttonDisable:boolean = true;

  constructor(private pagesService: AppServiceService) { }

  ngOnInit(): void {
    let x="l";
    // this.pagesService.getCurrencySymbols().subscribe(
    //   (response: any) => {
    //     console.log("yasser",response.symbols);
    //     this.currencySymbols = [...Object.entries(response.symbols).map(([symbol, name]) => ({symbol, name}))];
    //     console.log("yasser1",this.currencySymbols);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

  onChangeFromCurrency(){
    this.getToCurrency();
  }

  onChangeToCurrency(){
    this.amoutDisable=false;
  }

  getToCurrency(){
    console.log("here",this.InputsValue.from)
    this.toCurrencySymbols = [...this.currencySymbols.filter((item)=>{
        return item.symbol !== this.InputsValue.from
    })];
    console.log("here",this.toCurrencySymbols)
  }

  onConvert(){
    this.pagesService.getCurrencyConversion(this.InputsValue).subscribe(
      (response: any) => {
        console.log("yasser",response.symbols);
        this.currencySymbols = [...Object.entries(response.symbols).map(([symbol, name]) => ({symbol, name}))];
        console.log("yasser1",this.currencySymbols);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
