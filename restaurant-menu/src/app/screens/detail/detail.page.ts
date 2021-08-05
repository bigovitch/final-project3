import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
id:number;
food:Food[] = [];
// cartItem:CartItem[]= [];
  constructor( private activatedRoute:ActivatedRoute , private foodService:FoodService) {
    this.id  = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {  
    this.foodService.getFood(this.id)
     .subscribe(data=>{
       this.food = data;
     });
  }
  addItemToCart(){
    // const  cartItem:CartItem = {
    // id:this.food.id ,
    // title:this.food.title,
    // price:this.food.price,
    // description:this.food.description,
    // calories:this.food.calories,
    // image:this.food.image,
    // quantity:1,
    // };
  }

}
