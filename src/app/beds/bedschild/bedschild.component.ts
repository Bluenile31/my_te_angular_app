import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bedschild',
  templateUrl: './bedschild.component.html',
  styleUrls: ['./bedschild.component.css']
})
export class BedschildComponent implements OnInit {

  constructor() { }
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

}
