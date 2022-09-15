import { Component, OnInit } from '@angular/core';
import * as ch from "../data/chairs.json"
@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = (ch as any).default;
}
