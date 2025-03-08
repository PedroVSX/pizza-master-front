import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-menu-product-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-product-card.component.html',
  styleUrl: './menu-product-card.component.scss'
})
export class MenuProductCardComponent {
  @Input() product: any;

  constructor(private dialog: MatDialog) {}

  openProductDialog() {
    this.dialog.open(ProductDialogComponent, {
      width: '700px',
      data: this.product
    });
  }

  addToCart(product: any) {
    console.log('Product added to cart: ', product);
  }
}
