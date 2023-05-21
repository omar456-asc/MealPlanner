import { Component, OnInit } from '@angular/core';
import { IngredientsServiceService } from '../../services/ingredients-service.service';

@Component({
  selector: 'app-all-ingredients',
  templateUrl: './all-ingredients.component.html',
  styleUrls: ['./all-ingredients.component.css'],
})
export class AllIngredientsComponent implements OnInit {
  ingredients: any[] = [];
  itemsPerPage: number = 10;
  itemsPerPageOptions: number[] = [5, 10, 20, 50];
  filteredIngredients: any[] = [];

  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 10;
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(public ingredientService: IngredientsServiceService) {
    this.itemsPerPage = 10;
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
    this.filterIngredients();

  }

  filterIngredients() {
    // Filter the ingredients array based on the search term
    this.filteredIngredients = this.ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Calculate the number of pages based on the filtered ingredients and items per page
    const totalItems = this.filteredIngredients.length;
    this.totalPages = Math.ceil(totalItems / this.itemsPerPage);

    // Reset the pages array
    this.pages = [];

    // Push the page numbers into the pages array
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }

    // Load the current page
    this.loadPage(this.currentPage);
  }
  loadPage(page: number) {
    // Set the current page to the selected page
    this.currentPage = page;

    // Get the starting and ending index of the items to be displayed on the current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    // Slice the ingredients array to get the ingredients for the current page
    this.filteredIngredients = this.filteredIngredients.slice(
      startIndex,
      endIndex
    );
  }

  deleteIngredient(ingredient: any) {
    // Remove the ingredient from the ingredients array
    const index = this.ingredients.indexOf(ingredient);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }

    // Recalculate the pages after deleting the ingredient
    this.filterIngredients();
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.filterIngredients();
    this.loadPage(this.currentPage);
  }

  // deleteIngredient(ingredient: any): void {
  //   console.log(ingredient);
  // }

  onSearchTermChange() {
    // Filter the ingredients based on the search term
    if (this.searchTerm) {
      this.ingredients = this.ingredients.filter((ingredient) => {
        return ingredient.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    } else {
      // Reset the ingredients to the full list if the search term is empty
      this.ingredientService.GetAllIngredients().subscribe(
        {
          next: (data: any) => {
            this.ingredients = data;
          },
          error: (err) => { console.log(err) }
        }
      )
    }

    // Recalculate the pages after filtering
    this.filterIngredients();
  }
}
