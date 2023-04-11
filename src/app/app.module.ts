import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    BiriyaniComponent,
    CooldrinksComponent,
    IcecreamsComponent,
    MocktailsComponent,
    SnacksComponent,
    BacktomenuComponent,
    MenuComponent,
    TeffinComponent,
    ORDERComponent,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [SignupComponent,MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
