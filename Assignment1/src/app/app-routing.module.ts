import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full'},
  { path:'login' , component:LoginComponent },
  { path: 'flightDetail' , component: FlightDetailsComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent , FlightDetailsComponent]
