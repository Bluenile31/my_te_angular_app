import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  //public logo="https://www.dreamstime.com/illustration/nh-logo.html"
  
  productentered: string=' '
  search_product(product_name:string):void{

    if(!product_name)
    {
      this.productentered=' ';

    }
    this.productentered=product_name;
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}
