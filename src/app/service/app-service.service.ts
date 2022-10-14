import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import {InputSearch} from '../components/currency-conversion/input-search';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
    ) { }


  getCurrencySymbols(){
    return this.http.get(this.sharedService.ipRoot + 'symbols');
  }
  
  getCurrencyConversion(data:InputSearch){
    return this.http.get(this.sharedService.ipRoot + `convert?to=${data.to}&from=${data.from}&amount=${data.amount}`);
  }
}
