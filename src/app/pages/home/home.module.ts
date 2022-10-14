import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PageSharedModule } from '../page-shared.module';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PageSharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
