import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgIcon],
  viewProviders: [provideIcons({bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeFill})],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
