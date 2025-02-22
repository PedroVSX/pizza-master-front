import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapFacebook, bootstrapInstagram } from '@ng-icons/bootstrap-icons'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ bootstrapInstagram, bootstrapFacebook })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

}
