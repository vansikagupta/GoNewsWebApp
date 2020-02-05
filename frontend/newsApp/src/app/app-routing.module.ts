import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path:"results", component: ResultsComponent},
  { path:"dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
