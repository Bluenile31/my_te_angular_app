import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NavbarComponent } from './navbar/navbar.component';
import { MainscComponent } from './mainsc/mainsc.component';

//import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';


const routes:Routes=[
  //{path:'',component:NavbarComponent},
  //{path:'cards',component:SearchComponent},
  {path:'',component:MainscComponent},
  {path:'cards',component:CardsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
