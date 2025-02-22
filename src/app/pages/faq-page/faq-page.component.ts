import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

}
