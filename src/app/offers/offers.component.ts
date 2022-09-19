import { Component, OnInit } from '@angular/core';
import * as off from "../data/allitems.json"
//import * as ch from "../data/chairs.json"
//import * as tab from "../data/tables.json"
//import * as b from "../data/beds.json";
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alll:any = (off as any).default;
  //product:any = (ch as any).default;
  //table:any = (tab as any).default;
  //alll:any=(b as any).default;
}
