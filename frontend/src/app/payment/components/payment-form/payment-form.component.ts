import { Component, OnInit } from '@angular/core';
import { PaymentFormService } from '../service/payment-form.service';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit{
  constructor( private paymentService: PaymentFormService){ }
  paySuccess = false;
  payFailed:any = false;
  FalseMsg='';
  validationForm = new FormGroup({
    card: new FormControl( [Validators.required]),
    cvv: new FormControl( [Validators.required]),
  });

  ngOnInit(): void {

  }
  Pay(amount:any,name:any) {
    let payUser = { amount, name };
    if(this.validationForm.valid){
    this.paymentService.PAYMENT(payUser).subscribe(
      (response: any) => {
        this.paySuccess=true;
        this.payFailed=false;
      },
      (err) => {
        this.payFailed=true;
        this.paySuccess=false;
        this.FalseMsg=err.error;

      }
    );}
    else{
      this.payFailed=true;
      this.paySuccess=false;
      this.FalseMsg="Please enter the required fields"
    }
  }
}
