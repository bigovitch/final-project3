import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http:HttpClient) {}
   addToCart(items : any){
     return this.http.post<any>("http://localhost:5000/addToCart", items)
   }
   getAllCartItems(){
     return this.http.get<any>("http://localhost:5000/allItems")
   }
removeItem(id:number){
  return this.http.delete<any>("http://localhost:5000/itemCart/delete/id/" + id);
}
}
