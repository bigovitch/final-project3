import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getFoods(): Observable<Food[]>{
    // console.log('service method');
    return this.http.get<Food[]>("http://localhost:5000");
  }

getFood(id: any):Observable<Food[]>{
  return this.http.get<Food[]>("http://localhost:5000/id/" + id);
}

postDish(data:any){
  return this.http.post<any>("http://localhost:5000/addDish" , data)
  .pipe(map((res:any)=>{
    return (res);
  }))
}
updateDish(data:any , id:number){
return this.http.put<any>("http://localhost:5000/dishes/update/id" +id,data)
.pipe(map((res:any)=>{
  return res;
}))
}
deleteDish(id:number){
  return this.http.delete<any>("http://localhost:5000/dishes/delete/id/" + id)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
