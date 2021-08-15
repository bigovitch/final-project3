import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartItemList: any = [];
  total:number=0;
  quantity: number = 1;
  constructor(public toastController: ToastController,private cartService: CartService , private router:Router) { 
  
  }
  
ngOnInit() {
  
  }
  ionViewWillEnter(){
    console.log('hello')
    this.getAllItems();

  }
  getAllItems() {
    this.cartService.getAllCartItems()
      .subscribe(res => {
        this.cartItemList = res;
        this.total=0
        this.cartItemList.forEach((a:any) => {
          this.total = a.totalprice + this.total;
        });
        
        console.log(this.total);
        console.log(this.cartItemList);
      });
  }
  removeItem(id: number) {
    this.cartService.removeItem(id)
      .subscribe(res => {
        this.getAllItems();
      })
  }
 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item Removed Successfully',
      duration: 2000
    });
    toast.present();
  }

checkOut(){
  this.router.navigate(['checkout']);
  // ,{state:this.cartItemList});
  localStorage.setItem("checkoutData", JSON.stringify(this.cartItemList));
  localStorage.setItem("grandTotal" , this.total.toString());
  this.cartItemList.forEach((a:any) => {
    this.removeItem(a.id);
  });
}
}

