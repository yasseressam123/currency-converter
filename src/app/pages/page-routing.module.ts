import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: '', redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    {path: 'details', loadChildren: () => import('./pages-details/pages-details.module').then(m => m.PagesDetailsModule)}
    // {path: 'page-not-found', component: PageNotFoundComponent},
    // {path: '**', redirectTo: 'page-not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
