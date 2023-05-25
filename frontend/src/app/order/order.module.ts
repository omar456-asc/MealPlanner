import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],exports:[OrderComponent],
})
export class OrderModule { }
