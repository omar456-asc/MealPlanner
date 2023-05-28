import { Component, OnInit } from '@angular/core';
import { IngredientsServiceService } from '../../services/ingredients-service.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css'],
})
export class CreateIngredientComponent implements OnInit {
  selectedFile: File | undefined;
  newIngredient: any = {};
  public ingredient:
    | {
        id: string;
        image: string;
        consistency: any;
        name: string;
        price: number;
      }
    | any;

  constructor(private ingredientService: IngredientsServiceService) {
    this.ingredient = {
      image: '',
      consistency: '',
      name: '',
      price: 0,
    };
  }
  ngOnInit(): void {}

  createIngredient(formData: any) {
    const ingredientData = new FormData();
    ingredientData.append('name', this.newIngredient.name);
    console.log(this.newIngredient.name);
    ingredientData.append('consistency', this.newIngredient.consistency);
    ingredientData.append('price', this.newIngredient.price);
    if (this.selectedFile) {
      ingredientData.append('image', this.selectedFile);
    }
    // console.log(ingredientData);
    // console.log(ingredientData.getAll);
    // console.log(ingredientData.get('name'));

    this.ingredientService.addNewIngredient(ingredientData).subscribe(
      (response: any) => {
        console.log(response);
        alert('Created Success');
        // Handle success response
      },
      (error: any) => {
        console.error(error);
        // Handle error response
      }
    );
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
}
