import { Component } from '@angular/core';

@Component({
  selector: 'app-customize-meal',
  templateUrl: './customize-meal.component.html',
  styleUrls: ['./customize-meal.component.css'],
})
export class CustomizeMealComponent {
  constructor() {
    this.totalMealPrice = 3000;
  }
  totalMealPrice: number | undefined;
  meal = {
    _id: '645ec2bead470bb97d272615',
    id: 716430,
    title: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    summary:
      'It consists of olive oil, oregano, tomato, olives, mozzarella or other cheese',
    ingredients: [1001, 1034053],
    category: 'Pizza-category',
    price: '100$',
    rate: '2.9',
    ingredients_details: [
      {
        _id: '645cd99a6d27a2919e86f854',
        id: 1001,
        name: 'butter',
        consistency: 'solid',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9jlpwWQv_eQ0CcaTZLNftuLPIgmhkJuYi9X9FIiS-w&s',
        amount: 2,
        price: 100,
      },
      {
        _id: '645cdf246d27a2919e86f85c',
        id: 1034053,
        name: 'olive oil',
        consistency: 'liquid',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9jlpwWQv_eQ0CcaTZLNftuLPIgmhkJuYi9X9FIiS-w&s',
        amount: 1,
        price: 200,
      },
    ],
    favourite: false,
  };
  removeIngredient(ingredient: any) {
    // Implement logic to remove the ingredient from the meal
    // You can update the meal's ingredient array and recalculate the total price
    alert('Removed successfully');
  }
}
