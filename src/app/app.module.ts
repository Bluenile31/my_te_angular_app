import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainscComponent } from './mainsc/mainsc.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { ChairsComponent } from './chairs/chairs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainscComponent,
    SearchComponent,
    CardsComponent,
    ChairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
