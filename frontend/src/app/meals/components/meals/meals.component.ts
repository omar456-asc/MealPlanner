import { Component } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  card={
    active:true
  };
  favourite=false;
  AddToFav(){

    this.favourite = !this.favourite;
  }
}
