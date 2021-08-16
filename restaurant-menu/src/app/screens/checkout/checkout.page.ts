import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkOutModel } from 'src/app/models/checkout';
import { Order } from 'src/app/models/placeorder.model';
import { PlaceOrderService } from 'src/app/services/place-order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItemList:any;
  userForm:FormGroup;
  total : number;
  order:Order ;
  orderList:any;

  checkoutObj : checkOutModel = new checkOutModel();
  constructor( private formBuilder:FormBuilder , private placeOrders:PlaceOrderService , private router:Router) {
   }

  ngOnInit() {
    
    this.userForm = this.formBuilder.group({
      email:[null,Validators.compose([Validators.required,Validators.email])],
      fullName:[null, Validators.required],
      address:[null , Validators.required],
      city:[null,Validators.required]
    })
  }
  ionViewWillEnter(){
    this.cartItemList = JSON.parse(localStorage.getItem("checkoutData"));
    this.total = Number(localStorage.getItem("grandTotal"));
    console.log(this.cartItemList);
  }
  placeOrder(){
    this.checkoutObj.total = this.total;
    // append the cart list to the userform ( target the cartlist then add the form value)
    this.cartItemList.forEach((a:any)=>{
      Object.assign(a,this.userForm.value);
    })
    console.log(this.cartItemList)
    // 
    this.cartItemList.forEach((b:any )=> {
      this.placeOrders.postOrder(b)
      .subscribe(res=>{
        localStorage.removeItem('checkoutData')
        this.total=0;
        alert("Product Added");
        
      })
    });
    this.router.navigate(['listing'])
  }
}
