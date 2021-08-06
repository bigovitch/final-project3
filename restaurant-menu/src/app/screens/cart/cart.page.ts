import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartItemList: any = []
  constructor(private cartService: CartService) { 
  console.log(history.state)
  }
  ngOnInit() {
    this.getAllItems()
    
  }
  getAllItems() {
    this.cartService.getAllCartItems()
      .subscribe(res => {
        this.cartItemList = res;
        console.log(this.cartItemList);
      });
  }
  removeItem(id: number) {
    this.cartService.removeItem(id)
      .subscribe(res => {
        alert("item removed");
        this.getAllItems();
      })
  }

}
