import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllIngredientsComponent } from './components/all-ingredients/all-ingredients.component';
import { CreateIngredientComponent } from './components/create-ingredient/create-ingredient.component';
import { UpdateIngredientComponent } from './components/update-ingredient/update-ingredient.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';

@NgModule({
  declarations: [
    AllIngredientsComponent,
    CreateIngredientComponent,
    UpdateIngredientComponent,
  ],

  imports: [CommonModule, RouterModule, FormsModule, AdminSharedModule],
  exports: [
    AllIngredientsComponent,
    CreateIngredientComponent,
    UpdateIngredientComponent,
  ],
})
export class IngredientsModule {}
