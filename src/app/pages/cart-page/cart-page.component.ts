import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartService } from '../../services/cart.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapTrash3Fill } from '@ng-icons/bootstrap-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, NgIcon],
  viewProviders: [provideIcons({bootstrapTrash3Fill})],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items
    });
  }

  removeItem(product: any) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  redirectTo(path: string) {
    this.router.navigate([path])
  }
}
