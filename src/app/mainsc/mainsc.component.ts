import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainsc',
  templateUrl: './mainsc.component.html',
  styleUrls: ['./mainsc.component.css']
})
export class MainscComponent implements OnInit {

  constructor() { }
  ProductDetails = [
    {
      "pid": "100",
      "pname": "Chair",
      "status": "Active",
      "color": "green",
      "pdesc":"Upto 50% Off on Chairs. !!Avail now!!"
    },
    {
      "pid": "103",
      "pname": "Wardrobe",
      "status": "Active",
      "color": "green",
      "pdesc":"Free Delivery at Doorstep!!!"
    },
    {
      "pid": "105",
      "pname": "Bunk beds",
      "status": "Active",
      "color": "green",
      "pdesc": "Buy 1 get 1 Free"
    },
    {
      "pid": "101",
      "pname": "King Size Beds",
      "status": "InActive",
      "color": "red",
      "pdesc":"Check Back Later!!!"
    },
    {
      "pid": "102",
      "pname": "Tables",
      "status": "Out of Stock",
      "color": "yellow",
      "pdesc":"Coming Soon"
    },
    
    {
      "pid": "104",
      "pname": "Wooden Sofa",
      "status": "Coming Soon",
      "color": "red",
      "pdesc": "Check Back Later!!!"
    },
    
    {
      "pid": "106",
      "pname": "Dining table",
      "status": "Out of Stock",
      "color": "red",
      "pdesc": "Extra Chairs Free"
    }
  ]

  ngOnInit(): void {
  }

}
