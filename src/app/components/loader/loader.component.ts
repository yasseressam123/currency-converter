import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(
     private router:Router,
     private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.spinner.show();
      this.router.navigate(['pages']);
    }, 2000);; 
  }

}
