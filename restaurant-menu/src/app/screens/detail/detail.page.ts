import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {
  id: number;
  food: Food = new Food();
  foodList: any;
  quantity: number = 1;
  constructor(private cartService: CartService, private foodService: FoodService, private router: Router) {

    this.id = Number(localStorage.getItem('productId'));
  }
  ngOnInit() {
    this.foodService.getFood(this.id)
      .subscribe(data => {
        this.foodList = data;
        console.log(this.foodList)
      });

  }
  addItemToCart() {
    this.food.title = this.foodList.title,
      this.food.price = this.foodList.price,
      this.food.description = this.foodList.description,
      this.food.image = this.foodList.image,
      this.food.quantity = this.quantity,
      this.food.totalprice = this.foodList.price * this.quantity;
    this.cartService.addToCart(this.food)
      .subscribe(res => {
        this.router.navigate(['cart']);
      })
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    this.quantity--;
  }

}
