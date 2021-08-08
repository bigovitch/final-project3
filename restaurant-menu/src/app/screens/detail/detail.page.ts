import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
// import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
id:number;
food:any;
// cartItem:CartItem[]= [];
  constructor( private activatedRoute:ActivatedRoute ,private cartService : CartService, private foodService:FoodService , private router : Router) {
    this.id  = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  // async presentToast() {
  //   const toast = await this.toastController.create({
  //     message: 'Your settings have been saved.',
  //     duration: 2000
  //   });
  //   toast.present();
  // }
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
    let item ={
      title : this.food.title,
      price : this.food.price,
      description : this.food.description,
      image : this.food.image
    }
    
    this.cartService.addToCart(item)
    .subscribe(res=>{
      console.log(res)
      this.router.navigate(['cart']);
      
      
    })
  }

}
