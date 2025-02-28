import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReviewComponent } from './user-review/user-review.component';

@Component({
  selector: 'app-reviews-carousel',
  standalone: true,
  imports: [CommonModule, UserReviewComponent],
  templateUrl: './reviews-carousel.component.html',
  styleUrl: './reviews-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewsCarouselComponent {
  reviews = [
    {
      name: 'João',
      rating: 5,
      comment: 'Esta pizza é incrível! Massa crocante por fora, macia por dentro, molho de tomate fresco e equilibrado, queijo cremoso e ingredientes de alta qualidade. Assada no forno a lenha, tem um sabor defumado único. Recomendo demais!'
    },
    {
      name: 'Maria',
      rating: 4,
      comment: 'Muito boa, mas poderia ter mais queijo.'
    },
    {
      name: 'Pedro',
      rating: 3,
      comment: 'A pizza estava boa, mas a entrega demorou muito.'
    },
    {
      name: 'Ana',
      rating: 5,
      comment: 'Perfeita! A melhor pizza que já comi.'
    },
    {
      name: 'Carlos',
      rating: 4,
      comment: 'Sabor excelente, mas o preço é um pouco salgado.'
    }
  ];
}
