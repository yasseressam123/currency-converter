import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // https://api.apilayer.com/fixer/convert?to=GBP&from=EUR&amount=8
  ipRoot: string = 'https://api.apilayer.com/fixer/';

  constructor() { }
}
