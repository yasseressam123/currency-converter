import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesDetailsComponent } from './pages-details.component';
import { PagesDetailsRoutingModule } from './pages-details-routing.module';
import { PageSharedModule } from '../page-shared.module';



@NgModule({
  declarations: [
    PagesDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesDetailsRoutingModule,
    PageSharedModule
  ]
})
export class PagesDetailsModule { }
