import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainscComponent } from './mainsc/mainsc.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
import { BedsComponent } from './beds/beds.component';
import { BedschildComponent } from './beds/bedschild/bedschild.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AdsComponent } from './ads/ads.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainscComponent,
    SearchComponent,
    CardsComponent,
    ChairsComponent,
    TablesComponent,
    BedsComponent,
    BedschildComponent,
    CounterComponent,
    CounterchildComponent,
    AdsComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
