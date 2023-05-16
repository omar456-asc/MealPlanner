import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  private readonly PaymentUrl = 'http://localhost:7400/api/payment';

  constructor(private readonly myClient:HttpClient) { }

  PAYMENT(payment:any){
    return this.myClient.post(this.PaymentUrl, payment);
  }
}
