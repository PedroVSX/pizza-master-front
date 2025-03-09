import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  active: boolean;
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {
  faqs: FAQ[] = [
    {
      question: 'Como faço para fazer um pedido?',
      answer: 'Você pode fazer um pedido diretamente pelo nosso site. Basta escolher a pizza que preferir, adicioná-la ao carrinho e seguir o processo de checkout.',
      active: false
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos cartões de crédito, débito, PIX e pagamentos via PayPal.',
      active: false
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'O prazo de entrega varia de acordo com a sua localização, mas geralmente é de 30 a 90 minutos.',
      active: false
    },
    {
      question: 'Posso cancelar meu pedido?',
      answer: 'Sim, você pode cancelar seu pedido antes dele ser enviado. Mas note que não poderá ultrapassar o prazo de 10 minutos após a confirmação do pedido.',
      active: false
    },
    {
      question: 'Como faço para entrar em contato com o suporte?',
      answer: 'Você pode entrar em contato com o nosso suporte diretamente pelo site. Basta enviar um e-mail para <a href="mailto:suporte@pizzamaster.com">suporte@pizzamaster.com</a>',
      active: false
    }
  ];

  toggleFAQ(index: number): void {
    console.log('Clicou na pergunta:', index); // Verifique no console
    this.faqs[index].active = !this.faqs[index].active;
  }
}
