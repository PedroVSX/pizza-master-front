import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCarouselComponent {
  products = [
    {}
  ];
}
