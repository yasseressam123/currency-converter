import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/service/app-service.service';
import {InputSearch} from './input-search';
import {ActivatedRoute, Router } from '@angular/router';

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
    amount:1
  };
  keyDisable:boolean = true;
  result:String = "";
  destailsDisplay:boolean= false;
  fromDisable:boolean = false;

  constructor(
    private pagesService: AppServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pagesService.getCurrencySymbols().subscribe(
      (response: any) => {
        console.log("yasser",response.symbols);
        this.currencySymbols = [...Object.entries(response.symbols).map(([symbol, name]) => ({symbol, name}))];
        console.log("yasser1",this.currencySymbols);
      },
      (error) => {
        console.log(error);
      }
    )
    this.pagesService.Currency.subscribe(
      (data: InputSearch) => {
          this.getToCurrency();
          this.InputsValue.from = data['from'];
          this.InputsValue.to = data['to'];
          this.fromDisable = true;
          console.log("input",this.InputsValue)
      }
    );
  }

  onChangeFromCurrency(){
    this.getToCurrency();
  }

  onChangeToCurrency(){
    this.keyDisable=false;
    this.handleConversion();
  }

  getToCurrency(){
    console.log("here",this.InputsValue.from)
    this.toCurrencySymbols = [...this.currencySymbols]
    // this.toCurrencySymbols = [...this.currencySymbols.filter((item)=>{
    //     return item.symbol !== this.InputsValue.from
    // })];
    console.log("here",this.toCurrencySymbols)
  }

  onConvert(){
    this.handleConversion();
    this.destailsDisplay = true;
  }

  handleConversion(){
    this.pagesService.getCurrencyConversion(this.InputsValue).subscribe(
      (response: any) => {
        console.log("res",response)
        this.result = response.result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onSwap(){
    [this.InputsValue.from, this.InputsValue.to] = [this.InputsValue.to, this.InputsValue.from];
    this.handleConversion();
  }

  handlePageDetails(){
    this.router.navigate(['../details'], {relativeTo: this.route, queryParams: {data: JSON.stringify({}) , ...this.InputsValue }})
  }

}
