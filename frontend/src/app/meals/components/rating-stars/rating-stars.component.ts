import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent {
  maxRating = 5;
  stars = Array.from({ length: this.maxRating }, (_, i) => i + 1);
  rating = 0;

  rate(star: number) {
    console.log('User selected rating:', star);
    this.rating = star;
    // Do somethin
  }

}
