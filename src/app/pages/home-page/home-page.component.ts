import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
