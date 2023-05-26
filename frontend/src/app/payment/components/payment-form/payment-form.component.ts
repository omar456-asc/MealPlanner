import { Component, OnInit } from '@angular/core';
import { PaymentFormService } from '../service/payment-form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminOrdersServiceService } from 'src/app/admin/admin-orders/services/admin-orders-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  id: any;
  constructor(
    private Router: ActivatedRoute,
    private paymentService: PaymentFormService,
    private AdminOrdersServiceService: AdminOrdersServiceService,
    private router:Router
  ) {
    this.id = this.Router.snapshot.paramMap.get('id');
  }
  Price: any;
  paySuccess = false;
  payFailed: any = false;
  FalseMsg = '';
  validationForm = new FormGroup({
    card: new FormControl(null,[Validators.required]),
    cvv: new FormControl(null,[Validators.required]),
  });

  ngOnInit(): void {
    this.AdminOrdersServiceService.getOrderByID(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.Price = data.order.totalPrice;
        console.log(this.Price);
      },
    });
  }
  Pay(amount: any, name: any) {
    let payUser = { amount, name };
    if (this.validationForm.valid) {
      this.paymentService.PAYMENT(payUser).subscribe(
        (response: any) => {
          this.paySuccess = true;
          this.payFailed = false;
          this.updateOrderStatus('payed');
          this.router.navigate(['/user']);
        },
        (err) => {
          this.payFailed = true;
          this.paySuccess = false;
          this.FalseMsg = err.error;
        }
      );
    } else {
      this.payFailed = true;
      this.paySuccess = false;
      this.FalseMsg = 'Please enter the required fields';
    }
  }
  updateOrderStatus(status: any) {
    this.AdminOrdersServiceService.updateOrderStatus(this.id, status).subscribe(
      () => this.ngOnInit(),
      (err) => {
        console.log(err);
      }
    );
  }
}
