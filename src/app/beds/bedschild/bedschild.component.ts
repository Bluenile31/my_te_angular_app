import { Component, OnInit,Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cartitem } from 'src/app/cartitem';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bedschild',
  templateUrl: './bedschild.component.html',
  styleUrls: ['./bedschild.component.css']
})
export class BedschildComponent implements OnInit {

  constructor(private cartsvc:CartService) { }
  cart:Cartitem={
    id:0,
    pname:'',
    pdesc:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=0;
  value=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdesc=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
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

}
