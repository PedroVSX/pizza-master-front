import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuProductCardComponent } from './menu-product-card/menu-product-card.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MenuProductCardComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent {
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
