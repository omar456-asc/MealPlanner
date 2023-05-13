import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-all-ingredients',
  templateUrl: './all-ingredients.component.html',
  styleUrls: ['./all-ingredients.component.css'],
})
export class AllIngredientsComponent implements OnInit {
  ingredients = [
    {
      id: 1,
      name: 'Salt',
      consistency: 'Solid',
      img: 'https://via.placeholder.com/50x50.png?text=Salt',
    },
    {
      id: 2,
      name: 'Sugar',
      consistency: 'Solid',
      img: 'https://via.placeholder.com/50x50.png?text=Sugar',
    },
    {
      id: 3,
      name: 'Water',
      consistency: 'Liquid',
      img: 'https://via.placeholder.com/50x50.png?text=Water',
    },
  ];
  modalTitle: string = '';
  currentIngredient: any = {};
  constructor() {}
  ngOnInit(): void {}
  showModal(action: string, ingredient?: any): void {
    if (action === 'create') {
      this.modalTitle = 'Create Ingredient';
      this.currentIngredient = {
        name: '',
        consistency: '',
        img: '',
      };
    } else {
      this.modalTitle = 'Update Ingredient';
      this.currentIngredient = {
        name: ingredient.name,
        consistency: ingredient.consistency,
        img: ingredient.img,
      };
    }

    // $('#ingredientModal').modal('show');
  }
  saveIngredient(): void {
    console.log(this.currentIngredient);
    // $('#ingredientModal').modal('hide');
  }

  deleteIngredient(ingredient: any): void {
    console.log(ingredient);
  }
}
