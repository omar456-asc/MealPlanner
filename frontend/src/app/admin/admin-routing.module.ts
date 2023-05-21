import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowUserComponent } from './users/components/show-user/show-user.component';
import { AdminComponent } from './admin.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { AllIngredientsComponent } from './ingredients/components/all-ingredients/all-ingredients.component';
import { CreateIngredientComponent } from './ingredients/components/create-ingredient/create-ingredient.component';
import { UpdateIngredientComponent } from './ingredients/components/update-ingredient/update-ingredient.component';
import { AllMealsComponent } from './admin-meals/components/all-meals/all-meals.component';
import { ShowMealComponent } from './admin-meals/components/show-meal/show-meal.component';
import { AllOrdersComponent } from './admin-orders/components/all-orders/all-orders.component';
import { ShowOrderComponent } from './admin-orders/components/show-order/show-order.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/users', component: AdminComponent, canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/users/:id', component: ShowUserComponent, canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/ingredients', component: AllIngredientsComponent , canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/ingredients/create', component: CreateIngredientComponent , canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/ingredients/:id', component: UpdateIngredientComponent, canActivate: [AdminGuard, AuthGuard]  },

  { path: 'admin/meals', component: AllMealsComponent , canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/meals/:id', component: ShowMealComponent , canActivate: [AdminGuard, AuthGuard] },

  { path: 'admin/orders', component: AllOrdersComponent , canActivate: [AdminGuard, AuthGuard] },
  { path: 'admin/orders/:id', component: ShowOrderComponent , canActivate: [AdminGuard, AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
