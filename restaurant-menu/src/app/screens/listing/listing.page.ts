import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

foods:Food[] = [];
  constructor(private foodService:FoodService , private router:Router) {
   }

  ngOnInit() {
    
     this.foodService.getFoods()
     .subscribe(res=>{
       this.foods = res;
       console.log(res);
     },err=>{
       console.log(err)
     })

  }
  goToDetailPage(id:number){
    localStorage.setItem('productId',id.toString())
    this.router.navigate(['detail' , id]);
    
    }
    }
    

