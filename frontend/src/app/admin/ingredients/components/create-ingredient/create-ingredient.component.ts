import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css'],
})
export class CreateIngredientComponent implements OnInit {
  public ingredient:
    | [
        {
          id: string;
          imgae: string;
          consistency: any;
          name: string;
          price: number;
        }
      ]
    | undefined;

  constructor() {
    this.ingredient = [
      { id: '0', imgae: '', consistency: '', name: '', price: 0 },
    ];
  }
  ngOnInit(): void {}
  createIngredient() {
    console.log('ingredeint');
  }
}
