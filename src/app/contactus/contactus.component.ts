import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: Contactus[]=[];
  


  constructor(private contactservice:ContactusService) { }

  ngOnInit(): void {
    const contactObservable=this.contactservice.getContactusDetails();
    contactObservable.subscribe((contactData:Contactus[])=>{
      this.contact=contactData;
    });
  }
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
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
  

}
