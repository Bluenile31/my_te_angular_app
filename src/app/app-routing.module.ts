import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavbarComponent } from './navbar/navbar.component';
import { MainscComponent } from './mainsc/mainsc.component';

//import { SearchComponent } from './search/search.component';
//import { CardsComponent } from './cards/cards.component';
import { ChairsComponent } from './chairs/chairs.component';
import { TablesComponent } from './tables/tables.component';
import { BedsComponent } from './beds/beds.component';

const routes:Routes=[
  //{path:'',component:NavbarComponent},
  //{path:'cards',component:SearchComponent},
  {path:' ',component:MainscComponent},
  //{path:'Products',component:CardsComponent},
  {path:'chairs',component:ChairsComponent},
  {path:'tables',component:TablesComponent},
  {path:'beds',component:BedsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
