import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { BiriyaniComponent } from './Biriyani/biriyani.component';
import { CooldrinksComponent } from './Cooldrinks/cooldrinks.component';
import { IcecreamsComponent } from './Icecreams/icecreams.component';
import { MocktailsComponent } from './Mocktails/mocktails.component';
import { SnacksComponent } from './Snacks/snacks.component';
import { BacktomenuComponent } from './backtomenu/backtomenu.component';
import { MenuComponent } from './menu/menu.component';
import { TeffinComponent } from './teffin/teffin.component';
import { ORDERComponent } from './order/order.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"BIRIYANI",component:BiriyaniComponent},
  {path:"Cooldrinks",component:CooldrinksComponent},
  {path:"Icecreams",component:IcecreamsComponent},
  {path:"Mocktails",component:MocktailsComponent},
  {path:"Snacks",component:SnacksComponent},
  {path:"Backtomenu",component:BacktomenuComponent},
  {path:"Menu",component:MenuComponent},
  {path:"Teffin",component:TeffinComponent},
  {path:"ORDER",component:ORDERComponent},
  {path:"Pay",component:PayComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
