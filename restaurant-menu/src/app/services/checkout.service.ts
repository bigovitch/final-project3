import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  addTocheckout(items : any){
    return this.http.post<any>("http://localhost:5000/checkout", items)
  }
  usercheckout(){
    return this.http.get<any>("http://localhost:5000/checkout/orders")
  }
}
