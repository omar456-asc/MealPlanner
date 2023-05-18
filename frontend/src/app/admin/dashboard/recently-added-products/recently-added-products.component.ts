import { Component } from '@angular/core';

import { AllMealsService } from 'src//app/meals/services/all-meals.service';


@Component({
  selector: 'app-recently-added-products',
  templateUrl: './recently-added-products.component.html',
  styleUrls: ['./recently-added-products.component.css']
})
export class RecentlyAddedProductsComponent {
  products:any
  constructor(public mealsService: AllMealsService) {

  }

  ngOnInit(): void {
    this.mealsService.getLatest6products().subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
