import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    // {path: '', redirectTo: 'home'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    // {path: 'page-not-found', component: PageNotFoundComponent},
    // {path: '**', redirectTo: 'page-not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
