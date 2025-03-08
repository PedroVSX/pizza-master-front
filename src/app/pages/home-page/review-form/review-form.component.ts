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
  showNameError: boolean = false;
  showRatingError: boolean = false;

  setRating(star: number) {
    this.rating = star;
    return !(this.showNameError || this.showRatingError);
  }

  submitForm() {
    if (this.hasErrors()) {
      return
    }

    const review = {
      name: this.name,
      rating: this.rating,
      comment: this.comment
    };

    console.log(review); // Sending to Back-End

    this.rating = 0;
    this.name = '';
    this.comment = '';
  }

  hasErrors(): boolean {
    this.showNameError = false;
    this.showRatingError = false;

    // Validação do nome
    if (!this.name || this.name.trim() === '') {
      this.showNameError = true;
    }

    // Validação da avaliação
    if (this.rating === 0) {
      this.showRatingError = true;
    }

    if (this.showNameError || this.showRatingError) {
      return true;
    }

    return false;
  }
}
