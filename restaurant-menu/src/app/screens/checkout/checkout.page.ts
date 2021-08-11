import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators } from '@angular/forms';
import { checkOutModel } from 'src/app/models/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItemList:any;
  userForm:FormGroup;
  total : number;
  checkoutObj : checkOutModel = new checkOutModel();
  constructor( private formBuilder:FormBuilder) {
    console.log(window.history.state);
    
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
    this.cartItemList.forEach((a:any)=>{
      Object.assign(a,this.userForm.value);
    })
    console.log(this.cartItemList);
   
  }

}
