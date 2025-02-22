import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapFacebook, bootstrapInstagram, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ bootstrapInstagram, bootstrapFacebook, bootstrapLinkedin })],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
