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
    {
      id: 1,
      name: 'Pizza de Mussarela',
      description: 'A clássica pizza de mussarela que todo mundo ama! Massa artesanal, assada no forno a lenha, coberta com mussarela fresca e gratinada, e molho de tomate caseiro temperado com ervas. Simples, saborosa e irresistível. Perfeita para qualquer momento! 🍕✨',
      price: 49.99,
      image: 'https://i.imgur.com/0gt71fx.jpeg'
    },
    {
      id: 2,
      name: 'Pizza de Calabresa',
      description: 'A pizza de calabresa que conquista paladares! Massa artesanal, assada no forno a lenha, coberta com mussarela derretida, linguiça calabresa fatiada e um toque de cebola para equilibrar o sabor. Aproveite essa combinação clássica e cheia de personalidade. Uma escolha certeira para quem ama sabores marcantes! 🍕🔥',
      price: 54.99,
      image: 'https://i.imgur.com/d4DgavJ.jpeg'
    },
    {
      id: 3,
      name: 'Pizza de Frango com Catupiry',
      description: 'Uma combinação irresistível! Massa artesanal, assada no forno a lenha, coberta com mussarela derretida, frango desfiado temperado e muito Catupiry cremoso. Cada pedaço é uma explosão de sabores, perfeita para quem adora uma pizza cremosa e saborosa. 🍕💛',
      price: 52.99,
      image: 'https://i.imgur.com/Q9ly2u1.jpeg'
    },
    {
      id: 4,
      name: 'Pizza Marguerita',
      description: 'A clássica italiana, feita com simplicidade e sofisticação. Massa artesanal, assada no forno a lenha, coberta com mussarela fresca, tomates fatiados, manjericão fresco e um toque de azeite. Uma pizza leve, saborosa e cheia de charme, ideal para os amantes da tradição italiana. 🍕🌿',
      price: 49.99,
      image: 'https://i.imgur.com/QfKK2eF.jpeg'
    }
  ];
}
