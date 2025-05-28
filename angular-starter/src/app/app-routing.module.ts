import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'home', component: PortfolioComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ ],
})


export class AppRoutingModule { }
