import { Component, OnInit } from '@angular/core';
import { PaymentFormService } from '../service/payment-form.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit{
  constructor( private paymentService: PaymentFormService){ }
  paySuccess = false;
  payFailed = false;
  
  ngOnInit(): void {

  }
  Pay(amount:any,name:any) {
    let payUser = { amount, name };
    this.paymentService.PAYMENT(payUser).subscribe(
      (response: any) => {
        this.paySuccess=true;
      },
      (err) => {
        this.payFailed=true;
      }
    );
  }
}
