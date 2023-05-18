import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMealsComponent } from './components/all-meals/all-meals.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { UpdateMealComponent } from './components/update-meal/update-meal.component';
import { ShowMealComponent } from './components/show-meal/show-meal.component';
import { RouterModule } from '@angular/router';

import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllMealsComponent,
    AddMealComponent,
    UpdateMealComponent,
    ShowMealComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    AdminSharedModule
  ],
  exports:[
    AllMealsComponent,
    AddMealComponent,
    UpdateMealComponent,
    ShowMealComponent
  ]
})
export class AdminMealsModule { }
