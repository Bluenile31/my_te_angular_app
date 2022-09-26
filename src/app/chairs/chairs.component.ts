import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import Swal from 'sweetalert2';
import * as ch from "../data/chairs.json"
@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }
  

  ngOnInit(): void {
  }
  product:any = (ch as any).default;
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-plus';
    }
    else{
      content='fa-solid fa-xmark';
    }
    return content;
  }
}
