import { Component, OnInit } from '@angular/core';
import { IngredientsServiceService } from '../../services/ingredients-service.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css'],
})
export class CreateIngredientComponent implements OnInit {
  public ingredient:
    | {
        id: string;
        image: string;
        consistency: any;
        name: string;
        price: number;
      }
    | any;

  constructor() {
    this.ingredient = {
      id: '0',
      image: '',
      consistency: '',
      name: '',
      price: 0,
    };
  }
  ngOnInit(): void {}

  createIngredient(ingredientData: any) {
    console.log(this.ingredient);
  }
  uploadImage(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_cloudinary_upload_preset');

      // Make an HTTP request to upload the image file to Cloudinary
      // Use your preferred HTTP client library or Angular's HttpClient to make the request
      // Example:
      // this.http.post('your_cloudinary_upload_url', formData).subscribe(
      //   (response) => {
      //     const imageUrl = response['url'];
      //     resolve(imageUrl);
      //   },
      //   (error) => {
      //     reject(error);
      //   }
      // );

      // Placeholder code since the HTTP request is not implemented here
      const imageUrl = 'https://example.com/your-uploaded-image-url';
      resolve(imageUrl);
    });
  }
  onFileChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.ingredient.image = files[0];
    } else {
      this.ingredient.image = undefined;
    }
  }
}
