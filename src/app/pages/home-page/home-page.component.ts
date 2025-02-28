import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ReviewsCarouselComponent } from './reviews-carousel/reviews-carousel.component';
import { ReviewFormComponent } from './review-form/review-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FooterComponent, ProductCarouselComponent, ReviewsCarouselComponent, ReviewFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
