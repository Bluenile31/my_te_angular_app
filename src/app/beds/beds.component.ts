import { Component, OnInit } from '@angular/core';
import * as b from "../data/beds.json";
@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css']
})
export class BedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(b as any).default;
}
