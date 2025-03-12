import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems'
  private cart = new BehaviorSubject<any[]>(this.loadCartFromStorage());
  cart$ = this.cart.asObservable();

  constructor() {}

  addToCart(product: any) {
    const currentCart = this.getCart();
    const updatedCart = [...currentCart, product];
    this.cart.next(updatedCart);
    this.saveCartToStorage(updatedCart)
  }

  removeFromCart(product: any) {
    const currentCart = this.getCart();
  
    const indexToRemove = currentCart.findIndex(item => 
      item.id === product.id && item.price === product.price
    );

    if (indexToRemove !== -1) {
      currentCart.splice(indexToRemove, 1);
      this.cart.next([...currentCart]);
      this.saveCartToStorage(currentCart);
    }
  }

  clearCart() {
    this.cart.next([]);
    localStorage.removeItem(this.cartKey);
  }

  getCart() {
    return this.cart.getValue()
  }

  private loadCartFromStorage(): any[] {
    const storedCart = localStorage.getItem(this.cartKey);
    return storedCart ? JSON.parse(storedCart) : [];
  }

  private saveCartToStorage(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
