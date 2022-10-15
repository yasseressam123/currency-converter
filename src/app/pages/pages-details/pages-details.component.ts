import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/service/app-service.service';
import { InputSearch } from '../../components/currency-conversion/input-search';


@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrls: ['./pages-details.component.scss']
})
export class PagesDetailsComponent implements OnInit {

  currencyData:InputSearch = {
    to:"",
    from:"",
    amount:0
  }

  constructor(
    private route: ActivatedRoute,
    private pagesService: AppServiceService,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log("pram",params)
      this.currencyData.to = params['to'];
      this.currencyData.from = params['from'];
      this.currencyData.amount = params['amount'];
      this.pagesService.Currency.next(this.currencyData);
    });
  }
  // this.router.navigate(['../search'], {relativeTo: this.route, queryParams: {data: JSON.stringify({}) , pageNo:page}})
}
