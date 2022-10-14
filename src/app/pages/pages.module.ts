import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { PageSharedModule } from './page-shared.module';
import { PageRoutingModule } from './page-routing.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PageSharedModule,
    PageRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
