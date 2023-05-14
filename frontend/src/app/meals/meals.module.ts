import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { MealsComponent } from './components/meals/meals.component';




@NgModule({
  declarations: [
    MealsComponent,
    MealDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  MealsComponent,
  MealDetailsComponent
  ],
})
export class MealsModule { }
