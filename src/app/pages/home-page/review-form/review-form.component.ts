import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  name: string = '';
  rating: number = 0;
  comment: string = '';

  setRating(star: number) {
    this.rating = star;
  }

  submitForm() {
    const review = {
      name: this.name,
      rating: this.rating,
      comment: this.comment
    };

    console.log(review);
  }
}
