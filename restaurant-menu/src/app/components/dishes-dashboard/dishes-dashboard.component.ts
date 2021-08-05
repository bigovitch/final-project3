import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule , FormsModule  } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-dishes-dashboard',
  templateUrl: './dishes-dashboard.component.html',
  styleUrls: ['./dishes-dashboard.component.scss'],
})
export class DishesDashboardComponent implements OnInit {
  formValue:FormGroup
  display:boolean;
  foodList:any;
  @ViewChild('closebutton') closebutton;
  constructor(private formBuilder:FormBuilder, private foodService: FoodService) { }


  ngOnInit() {
    console.log("My Lifecycle hook is called by Ng on in it")
    this.formValue = this.formBuilder.group({
      title:[''],
      price:[''],
      description:[''],
      calories:[''],
    });
    this.getAllDishes();
  }

  getAllDishes(){
    this.foodService.getFoods()
    .subscribe(res=>{
      this.foodList = res;
      console.log(this.foodList);
    },err=>{

    })
  }
  addDish(){

  }
onEdit(row:any){
  this.foodList.id = row.id;
this.formValue.controls['title'].setValue(row.title);
this.formValue.controls['price'].setValue(row.price);
this.formValue.controls['description'].setValue(row.description);
this.formValue.controls['calories'].setValue(row.calories);
  }
  editDish(){
    this.foodList.title = this.formValue.value.title;
    this.foodList.price = this.formValue.value.price;
    this.foodList.description = this.formValue.value.description;
    this.foodList.calories = this.formValue.value.calories;

    this.foodService.updateDish(this.foodList , this.foodList.id)
    .subscribe(res=>{
      alert('updated successfully')
    })

  }
  deleteDish(row:any){
this.foodService.deleteDish(row.id)
.subscribe(res=>{
  alert(" Dish Successfully Deleted");
  this.getAllDishes();
})
  }
  openModal(){
    this.display = true;
  }
  public onSave() {
    this.closebutton.nativeElement.click();
  }

}
