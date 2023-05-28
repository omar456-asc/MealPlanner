import { Component, ElementRef } from '@angular/core';
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
  categories = ['Pizza-category', 'Pasta-category', 'Fish-category', 'Specialty-Pizza',]
  isMealAdded = false;

  constructor(public ingredientService: IngredientsServiceService,
    private el: ElementRef,
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

    if (file) {
      // Convert the selected image file to a data URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.meal.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm() {
    let inputEl: any = this.el.nativeElement.querySelector('#image');
    console.log(this.meal);
    console.log(this.meal.image);

    let formData = new FormData();
    formData.append('title', this.meal.title);
    formData.append('price', this.meal.price);
    formData.append('summary', this.meal.summary);
    formData.append('category', this.meal.category);

    // Append the image file to the form data
    if (inputEl.files.length > 0) {
      formData.append('image', inputEl.files[0]);
    }

    // Append the ingredient IDs to the form data
    this.meal.ingredients.forEach((ingredientId: any) => {
      formData.append('ingredients[]', ingredientId); // Append each ingredient ID individually
    });

    console.log(formData.get('title'));
    this.mealService.addNewMeal(formData).subscribe(
      (response: any) => {
        console.log('Meal added successfully!', response);
        this.isMealAdded = true;
        this.meal = {};

        alert(response.message);
        setTimeout(() => {
          // alert('Meal added successfully! Response: ' + JSON.stringify(response));
          this.isMealAdded = false; // Reset the flag after 2 seconds
        }, 5000);
      },
      (error: any) => {
        console.error('Error adding meal:', error);
        alert('Invalid Product Data');

        // Handle error response
      }
    );
  }

}
