import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSharedModule } from './admin-shared/admin-shared.module';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { LatestOrdersComponent } from './dashboard/latest-orders/latest-orders.component';
import { LatestMembersComponent } from './dashboard/latest-members/latest-members.component';
import { RecentlyAddedProductsComponent } from './dashboard/recently-added-products/recently-added-products.component';
import { UsersModule } from './users/users.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { AdminComponent } from './admin.component';
import { AdminMealsModule } from './admin-meals/admin-meals.module';
import { AdminOrdersModule } from './admin-orders/admin-orders.module';

@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    LatestOrdersComponent,
    LatestMembersComponent,
    RecentlyAddedProductsComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
    UsersModule,
    IngredientsModule,
    AdminMealsModule,
    AdminOrdersModule
  ],
})
export class AdminModule {}
