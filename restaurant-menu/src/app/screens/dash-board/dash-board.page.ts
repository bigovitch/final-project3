import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {
  foodList: any;
  foodObj: Food = new Food();
  display: boolean;
  formValue: FormGroup;
  constructor(private formBuilder: FormBuilder, private foodService: FoodService) { }

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      calories: [''],
    });
    this.getAllDishes();
  }
  addDish() {
    this.foodService.postDish(this.formValue.value).subscribe(res => {
      console.log(res)
      alert('dishes Added')
      this.formValue.reset();
      this.display = false;
    })
  }
  getAllDishes() {
    this.foodService.getFoods()
      .subscribe(res => {
        this.foodList = res;
        console.log(this.foodList);
      }, err => {

      })
  }
  deleteDish(row: any) {
    this.foodService.deleteDish(row.id)
      .subscribe(res => {
        alert(" Dish Successfully Deleted");
        this.getAllDishes();
      })
  }
  onEdit(row: any) {
    this.display = true;
    this.foodObj.id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['calories'].setValue(row.calories);
  }
  updateDish() {

    this.foodObj.title = this.formValue.value.title,
      this.foodObj.price = this.formValue.value.price,
      this.foodObj.description = this.formValue.value.description,
      this.foodObj.calories = this.formValue.value.calories



    this.foodService.updateDish(this.foodObj, this.foodObj.id)
      .subscribe(res => {
        alert('updated successfully');
        this.getAllDishes();
        this.formValue.reset();
        this.display = false;
      })

  }
}