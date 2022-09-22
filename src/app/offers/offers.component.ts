import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as off from "../data/allitems.json"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  logOut() {
    this.auth.logout();
    this.route.navigate(['']);
}
  @Input()b:any


  ngOnInit(): void {
  }
  productDetail=false;
  
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
 
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }
  alll:any=(off as any).default;
}
