import { Component } from '@angular/core';
import { IngredientsServiceService } from 'src/app/admin/ingredients/services/ingredients-service.service';
import { AdminMealsServiceService } from '../../services/admin-meals-service.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  meal: any = {
    ingredients: [], // Initialize ingredients as an empty array
    price: 0 // Initialize price as 0
  };
  ingredients = [
    { _id: 0, name: '', price: 0 },
  ];
  categories = ['Pizza-category', 'Pasta-category', 'Fish-category','Specialty-Pizza',]
  isMealAdded = false;

  constructor(public ingredientService: IngredientsServiceService,
    public mealService: AdminMealsServiceService) {
  }
  ngOnInit(): void {
    this.ingredientService.GetAllIngredients().subscribe(
      {
        next: (data: any) => {
          this.ingredients = data;
          console.log(this.ingredients);

        },
        error: (err) => { console.log(err) }
      }
    )

  }
  computePrice(): number {
    const ingredientPrices = this.meal.ingredients.map((ingredient: any) => {
      const selectedIngredient = this.ingredients.find((i: any) => i._id === ingredient);
      return selectedIngredient ? selectedIngredient.price : 0;
    });

    return ingredientPrices.reduce((a: number, b: number) => a + b, 0);
  }
  onIngredientChange() {
    this.meal.price = this.computePrice();
  }


  onImageChange(event: any) {
    this.meal.image = "http://res.cloudinary.com/dquveo9pl/image/upload/v1684333006/Images/mafkm3yefhk4ccpqeogu.jpg";

    const file = event.target.files[0];
    console.log(file);

    // if (file) {
    //   // Convert the selected image file to a data URL
    //   const reader = new FileReader();
    //   reader.onload = (e: any) => {
    // this.meal.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // }
  }

  submitForm() {

    this.mealService.addNewMeal(this.meal).subscribe();
    console.log(this.meal);
    this.isMealAdded = true;
    this.meal={};
    setTimeout(() => {
      this.isMealAdded = false; // Reset the flag after 2 seconds
    }, 5000);
  }
}
