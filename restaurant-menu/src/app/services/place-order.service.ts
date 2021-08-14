import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Order } from '../models/placeorder.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }

  postOrder(data:any){
    return this.http.post<any>("http://localhost:5000/placeorder" , data)
    .pipe(map((res:any)=>{
      return (res);
    }))
  }
}
